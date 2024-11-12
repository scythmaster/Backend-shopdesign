import logger from './logger';

export function LogFunctionCall() {
  return function (target: any, propertyKey?: any, descriptor?: PropertyDescriptor) {
    if (descriptor) {
      const originalMethod = descriptor.value;
      descriptor.value = function (...args: any[]) {
        logger.info(`Entering method ${propertyKey}`, {
          args,
          target: target.constructor.name,
        });
        return originalMethod.apply(this, args);
      };
    } else {
      for (const key of Object.getOwnPropertyNames(target.prototype)) {
        const methodDescriptor = Object.getOwnPropertyDescriptor(target.prototype, key);
        if (methodDescriptor && typeof methodDescriptor.value === 'function' && key !== 'constructor') {
          const originalMethod = methodDescriptor.value;
          methodDescriptor.value = function (...args: any[]) {
            logger.info(`Entering method ${key}`, {
              args,
              target: target.name,
            });
            return originalMethod.apply(this, args);
          };
          Object.defineProperty(target.prototype, key, methodDescriptor);
        }
      }
    }
  };
}
