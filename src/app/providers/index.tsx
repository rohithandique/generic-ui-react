// src/app/providers/index.ts
import { ComponentType } from 'react';
import { withMantine } from './with-mantine';
import { withRouter } from './with-router';
import { withAuth } from './with-auth';

type HOC = (component: ComponentType<any>) => ComponentType<any>;

const compose = (...hocs: HOC[]) => {
  return (component: ComponentType<any>): ComponentType<any> => {
    return hocs.reduceRight((wrapped, hoc) => hoc(wrapped), component);
  };
};

export const withProviders = compose(withMantine, withAuth, withRouter);
