import React, { PureComponent } from 'react';
import { FormattedDate, FormattedMessage, FormattedNumber } from 'react-intl';
import { Barcode } from './barcode/Barcode';

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

export class Boleto extends PureComponent<IProps> {
  render() {
    const {
      barcodeNumber, beneficiary, document, payer,
    } = this.props;

    return (
      <div
        style={{
          fontFamily: 'Open Sans, sans-serif',
          margin: '0 auto',
          maxWidth: '800px',
        }}
      >
        <img
          src="data:image/png;base64,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"
          style={{
            margin: '0 auto',
            height: '50px',
          }}
        />
        <p
          style={{
            margin: 0,
            fontWeight: 'bold',
            padding: '6px 0px 4px',
            fontSize: '14px',
          }}
        >
          <FormattedMessage
            id="boleto.header.instructions.title"
            defaultMessage="Instruções de pagamento:"
          />
        </p>
        <ul
          style={{
            borderBottomStyle: 'dashed',
            borderBottomColor: 'black',
            borderBottomWidth: '1px',
            fontSize: '12px',
            margin: 0,
            padding: 0,
            paddingLeft: '17px',
          }}
        >
          <li
            style={{
              paddingTop: '6px',
            }}
          >
            <FormattedMessage
              id="boleto.header.instructions.message.internetBanking"
              defaultMessage="Você pode copiar o número do código de barras e pagar seu boleto diretamente pelo internet Banking."
            />
            <strong
              style={{
                display: 'block',
              }}
            >
              <FormattedMessage
                id="boleto.header.barcodeNumber"
                defaultMessage={barcodeNumber}
              />
            </strong>
          </li>
          <li
            style={{
              padding: '6px 0px',
            }}
          >
            <FormattedMessage
              id="boleto.header.instructions.message.print"
              defaultMessage="Imprima em folha A4 (297 x 210 mm) e não utilize o modo econômico."
            />
          </li>
          <li
            style={{
              paddingBottom: '6px',
            }}
          >
            <strong
              style={{
                marginRight: '6px',
              }}
            >
              <FormattedMessage
                id="boleto.header.instructions.message.paymentDate"
                defaultMessage="Não efetue o pagamento fora do prazo, o pagamento será desconsiderado."
              />
            </strong>
            <FormattedMessage
              id="boleto.header.instructions.message.shelfLife"
              defaultMessage="Não constando pagamento após a validade do boleto, o pedido será cancelado."
            />
          </li>
          <li
            style={{
              paddingBottom: '20px',
            }}
          >
            <FormattedMessage
              id="boleto.header.instructions.message.contact"
              defaultMessage="Em caso de dúvidas, entre em contato através dos nossos canais de atendimento."
            />
          </li>
        </ul>
        <div
          style={{
            borderWidth: '1px',
            paddingTop: '2px',
          }}
        >
          <p
            style={{
              textAlign: 'right',
              margin: '2px',
              paddingBottom: '2px',
              fontSize: '10px',
              fontWeight: 'bold',
            }}
          >
            <FormattedMessage
              id="boleto.body.receipt"
              defaultMessage="RECIBO DO PAGADOR"
            />
          </p>
          <div
            style={{
              borderBottomStyle: 'dashed',
              borderBottomColor: 'black',
              borderBottomWidth: '1px',
            }}
          >
            <div
              style={{
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: '1px',
                display: 'flex',
              }}
            >
              <div
                style={{
                  padding: '4px 4px 0px',
                  borderRightStyle: 'solid',
                  borderRightColor: 'black',
                  borderRightWidth: '2px',
                }}
              >
                <img
                  src="data:image/jpeg;base64,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"
                    style={{
                      width: '170px',
                      height: '40px',
                    }}
                />
              </div>
              <div
                style={{
                  borderRightStyle: 'solid',
                  borderRightColor: 'black',
                  borderRightWidth: '2px',
                  padding: '0px 30px',
                }}
              />
              <p
                style={{
                  margin: '20px 2px 2px 60px',
                  fontWeight: 600,
                  fontSize: '16px',
                }}
              >
                <FormattedMessage
                  id="boleto.body.barcodeNumber"
                  defaultMessage={barcodeNumber}
                />
              </p>
            </div>
            <div
              style={{
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: '0px 1px 1px',
                display: 'flex',
                fontSize: '10px',
              }}
            >
              <div
                style={{
                  padding: '0px 0px 2px 4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                    paddingRight: '264px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.beneficiary"
                    defaultMessage="Beneficiário"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.beneficiary.name"
                    defaultMessage={beneficiary.name}
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.beneficiary.id"
                    defaultMessage={`CNPJ: ${beneficiary.id}`}
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.beneficiary.address"
                    defaultMessage={`${beneficiary.address} CEP: ${beneficiary.cep}`}
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  paddingLeft: '4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                    paddingRight: '10px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.beneficiary.account"
                    defaultMessage="Agência / Código do Beneficiário"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.beneficiary.account.value"
                    defaultMessage={beneficiary.account}
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  paddingLeft: '4px',
                }}
              >
                <p
                  style={{
                    margin: '2px 12px 2px 2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.species"
                    defaultMessage="Espécie"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.species.value"
                    defaultMessage={document.moneySpecies}
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  padding: '0px 10px 0px 4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.amount"
                    defaultMessage="Quantidade"
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  paddingLeft: '4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.beneficiary.billingCode"
                    defaultMessage="Carteira / Nosso Número"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.billingCode.value"
                    defaultMessage={beneficiary.billingCode}
                  />
                </p>
              </div>
            </div>
            <div
              style={{
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: '0px 1px 1px',
                display: 'flex',
                fontSize: '10px',
              }}
            >
              <div
                style={{
                  padding: '0px 0px 2px 4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                    paddingRight: '70px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.document.number"
                    defaultMessage="Número do documento"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.document.number.value"
                    defaultMessage={document.number}
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  paddingLeft: '4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                    paddingRight: '120px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.beneficiary.id"
                    defaultMessage="CPF / CNPJ"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.beneficiary.id.value"
                    defaultMessage={beneficiary.id}
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  paddingLeft: '4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                    paddingRight: '81px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.dueDate"
                    defaultMessage="Data de Vencimento"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedDate
                    value={document.dueDate}
                    day="numeric"
                    month="numeric"
                    year="numeric"
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  padding: '0px 4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.document.value"
                    defaultMessage="Valor Documento"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedNumber
                    style="currency"
                    currency="BRL"
                    value={document.value}
                    minimumFractionDigits={2}
                  />
                </p>
              </div>
            </div>
            <div
              style={{
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: '0px 1px 1px',
                display: 'flex',
                fontSize: '12px',
                height: '38px',
              }}
            >
              <div
                style={{
                  padding: '0px 10px 0px 4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.discount"
                    defaultMessage="(-) Descontos / Abatimentos"
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  padding: '0px 10px 0px 4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.deductions"
                    defaultMessage="(-) Outras deduções"
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  padding: '0px 10px 0px 4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.fine"
                    defaultMessage="(+) Mora / Multa"
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  padding: '0px 10px 0px 4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.additions"
                    defaultMessage="(+) Outros acréscimos"
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  padding: '0px 4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.collectValue"
                    defaultMessage="(=) Valor Cobrado"
                  />
                </p>
              </div>
            </div>
            <div
              style={{
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: '0px 1px 1px',
                paddingLeft: '4px',
                fontSize: '10px',
              }}
            >
              <p
                style={{
                  margin: 0,
                  padding: '2px',
                }}
              >
                <FormattedMessage
                  id="boleto.body.payer"
                  defaultMessage="Pagador"
                />
              </p>
              <p
                style={{
                  fontSize: '12px',
                  margin: '2px',
                }}
              >
                <FormattedMessage
                  id="boleto.body.payer.name"
                  defaultMessage={`${payer.name} - ${payer.phone}`}
                />
              </p>
              <p
                style={{
                  fontSize: '12px',
                  margin: '2px',
                }}
              >
                <FormattedMessage
                  id="boleto.body.payer.address"
                  defaultMessage={`${payer.address} - ${payer.cep}`}
                />
              </p>
            </div>
            <div
              style={{
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: '0px 1px 1px',
                display: 'flex',
                fontSize: '12px',
              }}
            >
              <div
                style={{
                  borderRightStyle: 'solid',
                  borderRightColor: 'black',
                  borderRightWidth: '1px',
                  paddingLeft: '4px',
                  fontSize: '10px',
                }}
              >
                <p
                  style={{
                    margin: '0px 550px 0px 2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.instructions"
                    defaultMessage="Instruções"
                  />
                </p>
                <p
                  style={{
                    margin: '2px',
                    fontSize: '12px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.instructions.message"
                    defaultMessage="Não aceitar pagamento via cheque e/ou após a data do vencimento."
                  />
                </p>
              </div>
              <div>
                <p
                  style={{
                    margin: '2px 4px',
                    fontSize: '10px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.mechanicalAuthentication"
                    defaultMessage="Autenticação Mecânica"
                  />
                </p>
              </div>
            </div>
            <p
              style={{
                margin: '6px 0px 2px',
                fontSize: '10px',
                textAlign: 'right',
              }}
            >
              <FormattedMessage
                id="boleto.body.CutMessage"
                defaultMessage="Corte na linha pontilhada"
              />
            </p>
          </div>
          <div
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: '1px',
              paddingTop: '22px',
            }}
          >
            <div
              style={{
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: '1px',
                display: 'flex',
              }}
            >
              <div
                style={{
                  padding: '4px 4px 0px',
                  borderRightStyle: 'solid',
                  borderRightColor: 'black',
                  borderRightWidth: '2px',
                }}
              >
                <img
                  src="data:image/jpeg;base64,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"
                    style={{
                      width: '170px',
                      height: '40px',
                    }}
                />
              </div>
              <div
                style={{
                  borderRightStyle: 'solid',
                  borderRightColor: 'black',
                  borderRightWidth: '2px',
                  padding: '0px 30px',
                }}
              />
              <p
                style={{
                  margin: '20px 2px 2px 60px',
                  fontWeight: 600,
                  fontSize: '16px',
                }}
              >
                <FormattedMessage
                  id="boleto.body.barcodeNumber"
                  defaultMessage={barcodeNumber}
                />
              </p>
            </div>
            <div
              style={{
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: '0px 1px 1px',
                display: 'flex',
                fontSize: '10px',
              }}
            >
              <div
                style={{
                  paddingLeft: '4px',
                }}
              >
                <p
                  style={{
                    margin: '0px 473px 0px 2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.paymentPlace"
                    defaultMessage="Local do pagamento"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.paymentPlace.message"
                    defaultMessage="Até o vencimento, preferencialmente no Banco Santander"
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  paddingLeft: '4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.due"
                    defaultMessage="Vencimento"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedDate
                    value={document.dueDate}
                    day="numeric"
                    month="numeric"
                    year="numeric"
                  />
                </p>
              </div>
            </div>
            <div
              style={{
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: '0px 1px 1px',
                display: 'flex',
                fontSize: '10px',
              }}
            >
              <div
                style={{
                  paddingLeft: '4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                    paddingRight: '510px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.beneficiary"
                    defaultMessage="Beneficiário"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.beneficiary.name"
                    defaultMessage={beneficiary.name}
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.beneficiary.id"
                    defaultMessage={`CNPJ: ${beneficiary.id}`}
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.beneficiary.address"
                    defaultMessage={`${beneficiary.address} CEP: ${beneficiary.cep}`}
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  paddingLeft: '4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                    width: '240px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.beneficiary.account"
                    defaultMessage="Agência / Código do Beneficiário"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.beneficiary.account.value"
                    defaultMessage={beneficiary.account}
                  />
                </p>
              </div>
            </div>
            <div
              style={{
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: '0px 1px 1px',
                display: 'flex',
                fontSize: '10px',
              }}
            >
              <div
                style={{
                  padding: '0px 10px 2px 4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.document.date"
                    defaultMessage="Data do Documento"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedDate
                    value={document.processDate}
                    day="numeric"
                    month="numeric"
                    year="numeric"
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  paddingLeft: '4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                    paddingRight: '50px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.documento.number"
                    defaultMessage="Nº do Documento"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.document.number.value"
                    defaultMessage={document.number}
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  padding: '0px 34px 0px 4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.documento.specie"
                    defaultMessage="Espécie Doc."
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body..documento.specie.value"
                    defaultMessage={document.species}
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  padding: '0px 36px 0px 4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.accept"
                    defaultMessage="Aceite"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.accept.value"
                    defaultMessage={document.accept}
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  padding: '0px 38px 0px 4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.processDate"
                    defaultMessage="Data Processamento"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedDate
                    value={document.processDate}
                    day="numeric"
                    month="numeric"
                    year="numeric"
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  paddingLeft: '4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.ourNumber"
                    defaultMessage="Nosso Número"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.beneficiary.billingCode"
                    defaultMessage={beneficiary.billingCode}
                  />
                </p>
              </div>
            </div>
            <div
              style={{
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: '0px 1px 1px',
                display: 'flex',
                fontSize: '10px',
              }}
            >
              <div
                style={{
                  padding: '0px 40px 0px 4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.bankUse"
                    defaultMessage="Uso do Banco"
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  padding: '0px 0px 2px 4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                    paddingRight: '60px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.document.wallet"
                    defaultMessage="Carteira"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.document.wallet.value"
                    defaultMessage={document.wallet}
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  padding: '0px 58px 0px 4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.document.specie"
                    defaultMessage="Espécie"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.document.specie.value"
                    defaultMessage={document.moneySpecies}
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  padding: '0px 45px 0px 4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.amount"
                    defaultMessage="Quantidade"
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  padding: '0px 111px 0px 4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.value"
                    defaultMessage="Valor"
                  />
                </p>
              </div>
              <div
                style={{
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'black',
                  borderLeftWidth: '1px',
                  paddingLeft: '4px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.document.value"
                    defaultMessage="(=) Valor Documento"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedNumber
                    style="currency"
                    currency="BRL"
                    value={document.value}
                    minimumFractionDigits={2}
                  />
                </p>
              </div>
            </div>
            <div
              style={{
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: '0px 1px 1px',
                display: 'flex',
                fontSize: '10px',
              }}
            >
              <div
                style={{
                  padding: '0px 45px 0px 4px',
                  borderRightStyle: 'solid',
                  borderRightColor: 'black',
                  borderRightWidth: '1px',
                  width: '524px',
                }}
              >
                <p
                  style={{
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.textInstruction"
                    defaultMessage="Instruções (texto de responsabilidade do Beneficiário)"
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="Boleto.body.textInstruction.message.checkPayment"
                    defaultMessage="Não aceitar pagamento via cheque e/ou após a data do vencimento."
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.textInstruction.message.order"
                    defaultMessage="Seu pedido será enviado somente após a confirmação do pagamento deste boleto, desde que não tenha
                    divergência de valores entre o valor cobrado e o valor pago."
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.textInstruction.message.lackOfPayment"
                    defaultMessage="A falta de pagamento deste boleto não implica em qualquer multa ou juros e o pedido será automaticamento cancelado."
                  />
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    margin: '2px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.textInstruction.message.wrongPayment"
                    defaultMessage="Não deposite nem faça transferência."
                  />
                </p>
              </div>
              <div
                style={{
                  flex: '26%'
                  }}
                >
                <div
                  style={{
                    height: '38px',
                  }}
                >
                  <p
                    style={{
                      margin: '2px 0px 0px 7px',
                    }}
                  >
                    <FormattedMessage
                      id="boleto.body.discount"
                      defaultMessage="(-) Descontos / Abatimentos"
                    />
                  </p>
                </div>
                <div
                  style={{
                    height: '38px',
                    borderWidth: '1px 0px',
                    borderStyle: 'solid',
                  }}
                >
                  <p
                    style={{
                      margin: '0px 0px 2px 7px',
                    }}
                  >
                    <FormattedMessage
                      id="boleto.body.otherDeductions"
                      defaultMessage="(-) Outras deduções"
                    />
                  </p>
                </div>
                <div
                  style={{
                    height: '38px',
                  }}
                >
                  <p
                    style={{
                      margin: '0px 0px 2px 7px',
                    }}
                  >
                    <FormattedMessage
                      id="boleto.body.fine"
                      defaultMessage="(+) Mora / Multa"
                    />
                  </p>
                </div>
                <div
                  style={{
                    height: '38px',
                    borderWidth: '1px 0px',
                    borderStyle: 'solid',
                  }}
                >
                  <p
                    style={{
                      margin: '0px 0px 2px 7px',
                    }}
                  >
                    <FormattedMessage
                      id="boleto.body.otherAdditions"
                      defaultMessage="(+) Outros Acrescimos"
                    />
                  </p>
                </div>
                <div
                  style={{
                    height: '38px',
                  }}
                >
                  <p
                    style={{
                      margin: '0px 0px 2px 7px',
                    }}
                  >
                    <FormattedMessage
                      id="boleto.body.amountCharged"
                      defaultMessage="(=) Valor Cobrado"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: '0px 1px 1px',
                padding: '0px 4px',
                fontSize: '10px',
              }}
            >
              <p
                style={{
                  margin: 0,
                  padding: '2px',
                }}
              >
                <FormattedMessage
                  id="boleto.body.payer"
                  defaultMessage="Pagador"
                />
              </p>
              <p
                style={{
                  fontSize: '12px',
                  margin: '2px',
                }}
              >
                <FormattedMessage
                  id="boleto.body.payer.name"
                  defaultMessage={`${payer.name} - ${payer.phone}`}
                />
              </p>
              <p
                style={{
                  fontSize: '12px',
                  margin: '2px',
                }}
              >
                <FormattedMessage
                  id="boleto.body.payer.address"
                  defaultMessage={`${payer.address} - ${payer.cep}`}
                />
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                paddingTop: '12px',
              }}
            >
              <p
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Barcode
                  barcodeNumber={barcodeNumber}
                />
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  flex: '40%',
                }}
              >
                <p
                  style={{
                    textAlign: 'right',
                    margin: '0px 2px 2px',
                    fontSize: '10px',
                    width: '130px',
                    paddingRight: '25px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.mechanicalAuthentication"
                    defaultMessage="Autenticação Mecânica"
                  />
                </p>
                <p
                  style={{
                    textAlign: 'right',
                    margin: '0px 2px 2px',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    width: '151px',
                  }}
                >
                  <FormattedMessage
                    id="boleto.body.compensationForm"
                    defaultMessage="FICHA DE COMPENSAÇÃO"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
