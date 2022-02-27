import { Meta, Story } from '@storybook/react';
import React from 'react';
import { renderToHtml } from '../../src';

export interface IProps {
  barcodeNumber: string;
  beneficiary: {
    name: string;
    address: string;
    cep: string;
    id: string;
    account: string;
    billingCode: string;
  };
  payer: {
    name: string;
    address: string;
    cep: string;
    phone: string;
  };
  document: {
    species: string;
    value: number;
    number: string;
    accept: string;
    processDate: Date;
    dueDate: Date;
    wallet: string;
    moneySpecies: string;
  };
}

export default {
  title: 'Boleto',
} as Meta;

export const Boleto: Story<IProps> = () => {
  return (
    <div
      dangerouslySetInnerHTML={{__html: renderToHtml({
        barcodeNumber: '84800000003.093930163202.5 00217127820 4 158003141558',
        beneficiary: {
          name: 'Adyen a serviço de Zoom',
          address: 'Av plinio, auxiliadora, Porto Alegre, RS.',
          cep: '90520-000',
          id: '14.796.606/0001-90',
          account: '3689 / 5434203',
          billingCode: '84454466337',
        },
        payer: {
          name: 'João da Silva',
          address: 'Av. Nações Unidas, 1 - Brooklin, São Paulo, SP',
          cep: '04578-907',
          phone: '48995243066',
        },
        document: {
          species: 'DM',
          value: 150,
          number: '809264068872877',
          accept: 'N',
          processDate: new Date('Tue Apr 16 2021 10:00:00 GMT-0300'),
          dueDate: new Date('Tue May 01 2020 10:00:00 GMT-0300'),
          wallet: '123456789',
          moneySpecies: 'R$',
        },
      })}}
    />
  );  
};
