// FoalTS
import { Config, Context, Hook, HookDecorator, HttpResponseBadRequest } from '../../core';
import { ApiParameter, ApiResponse, IApiCookieParameter } from '../../openapi';
import { getAjvInstance } from '../utils';

/**
 * Hook - Validate a specific cookie against an AJV schema.
 *
 * @export
 * @param {string} name - Cookie name.
 * @param {object} [schema={ type: 'string' }] - Schema used to validate the cookie.
 * @param {{ openapi?: boolean, required?: boolean }} [options={}] - Options.
 * @param {boolean} [options.openapi] - Add OpenApi metadata.
 * @param {boolean} [options.required] - Specify is the cookie is optional.
 * @returns {HookDecorator} The hook.
 */
export function ValidateCookie(
  name: string, schema: object = { type: 'string' } , options: { openapi?: boolean, required?: boolean } = {}
): HookDecorator {
  const ajv = getAjvInstance();
  const required = options.required !== false;

  function validate(ctx: Context) {
    const cookiesSchema = {
      properties: {
        [name]: schema
      },
      required: required ? [ name ] : [],
      type: 'object',
    };
    if (!ajv.validate(cookiesSchema, ctx.request.cookies)) {
      return new HttpResponseBadRequest({ cookies: ajv.errors });
    }
  }

  return (target: any, propertyKey?: string) =>  {
    Hook(validate)(target, propertyKey);

    if (options.openapi === false || (options.openapi === undefined && !Config.get('settings.openapi.useHooks'))) {
      return;
    }

    const apiCookieParameter: IApiCookieParameter = { in: 'cookie', name, schema };
    if (required) {
      apiCookieParameter.required = required;
    }

    ApiParameter(apiCookieParameter)(target, propertyKey);
    ApiResponse(400, { description: 'Bad request.' })(target, propertyKey);
  };
}
