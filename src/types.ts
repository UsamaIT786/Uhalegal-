import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  subServices: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  visaType: string;
  quote: string;
}

export interface ValueCardProps {
  number: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
}
