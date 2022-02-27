import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { IntlProvider } from 'react-intl';
import { Boleto } from './components/Boleto';
import { Html } from './html/Html';

export function renderToHtml(props: {
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
}) {
  const {
    barcodeNumber, beneficiary, document, payer,
  } = props;

  return `<!Doctype html>${renderToStaticMarkup(
    <Html>
      {
        <IntlProvider
          locale="pt-BR"
          defaultLocale="pt-BR"
        >
          <Boleto
            barcodeNumber={barcodeNumber}
            beneficiary={beneficiary}
            payer={payer}
            document={document}
          />
        </IntlProvider>
      }
    </Html>
  )}`;
}

