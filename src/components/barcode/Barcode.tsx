import React, { Fragment, PureComponent } from 'react';

interface IProps {
  barcodeNumber: string;
}

export class Barcode extends PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  convertStringToBinary = (barcodeData: string) => {
    const digits = ['00110', '10001', '01001', '11000', '00101', '10100', '01100', '00011', '10010', '01010'];

    if (barcodeData.length % 2 !== 0) {
      barcodeData = '0' + barcodeData;
    }

    let binaryDigits = '0000';
    for (let i = 0; i < barcodeData.length; i += 2) {
      const digit1 = digits[parseInt(barcodeData[i], 10)];
      const digit2 = digits[parseInt(barcodeData[i + 1], 10)];

      for (let j = 0; j < digit1.length; j++) {
        binaryDigits += digit1[j] + digit2[j];
      }
    }
    binaryDigits += '1000';

    return binaryDigits;
  }

  render() {
    const binaryDigits = this.convertStringToBinary(this.props.barcodeNumber.replace(/[^0-9]/g, ''));

    const line: Array<number> = [];
    // tslint:disable:prefer-for-of
    for (let i = 0; i < binaryDigits.length; i++) {
      line.push((binaryDigits[i] === '0') ? 1 : 3);
    }

    return (
      <Fragment>
        {line.map((d: number, i: number) => {
          return (
            <div
              key={i}
              style={{
                display: 'inline-block',
                width: line[i],
                height: '70px',
                backgroundColor: (i % 2 === 0) ? '#000000' : '#FFFFFF',
              }}
            />
          );
        })}
      </Fragment>
    );
  }
}
