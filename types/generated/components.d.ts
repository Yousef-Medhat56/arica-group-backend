import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsSection extends Schema.Component {
  collectionName: 'components_about_us_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    description: Attribute.RichText & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface EmployeeEmployee extends Schema.Component {
  collectionName: 'components_employee_employees';
  info: {
    displayName: 'Employee';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    role: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ServiceServiceSection extends Schema.Component {
  collectionName: 'components_service_service_sections';
  info: {
    displayName: 'service section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    images: Attribute.Media & Attribute.Required;
  };
}

export interface ServiceWhyUs extends Schema.Component {
  collectionName: 'components_service_why_uses';
  info: {
    displayName: 'why us';
    description: '';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface StatisticsStat extends Schema.Component {
  collectionName: 'components_statistics_stats';
  info: {
    displayName: 'Stat';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    number: Attribute.Integer & Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'about-us.section': AboutUsSection;
      'employee.employee': EmployeeEmployee;
      'service.service-section': ServiceServiceSection;
      'service.why-us': ServiceWhyUs;
      'statistics.stat': StatisticsStat;
    }
  }
}
