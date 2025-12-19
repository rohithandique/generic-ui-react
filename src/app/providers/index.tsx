// src/app/providers/index.ts
import { ComponentType } from 'react';
import { withRouter } from './with-router';
import { withRadix } from './with-radix';

type HOC = (component: ComponentType<any>) => ComponentType<any>;

const compose = (...hocs: HOC[]) => {
  return (component: ComponentType<any>): ComponentType<any> => {
    return hocs.reduceRight((wrapped, hoc) => hoc(wrapped), component);
  };
};

export const withProviders = compose(withRadix, withRouter);
