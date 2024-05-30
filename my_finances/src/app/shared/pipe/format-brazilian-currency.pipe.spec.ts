import { FormatBrazilianCurrencyPipe } from './format-brazilian-currency.pipe';

describe('FormatBrazilianCurrencyPipe', () => {
  let pipe: FormatBrazilianCurrencyPipe;

  beforeEach(() => {
    pipe = new FormatBrazilianCurrencyPipe();
  });

  it('create an instance', () => {
    const pipe = new FormatBrazilianCurrencyPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return null for null input', () => {
    expect(pipe.transform(null)).toBeNull();
  });

  it('should return null for NaN input', () => {
    expect(pipe.transform(NaN)).toBeNull();
  });

  it('should return formatted currency for valid number with correct locale and currency', () => {
    expect(pipe.transform(1234.56, 'pt-BR', 'BRL')).toEqual('R$ 1.234,56');
  });

  it('should return formatted currency for valid number with incorrect locale and correct currency', () => {
    expect(pipe.transform(1234.56, 'en-US', 'BRL')).toBe('R$1,234.56');
  });

  it('should return null for invalid value', () => {
    expect(pipe.transform(null, 'pt-BR', 'BRL')).toBeNull();
  });

  it('should return null for NaN value', () => {
    expect(pipe.transform('abc', 'pt-BR', 'BRL')).toBeNull();
  });
});
