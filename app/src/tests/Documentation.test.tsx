import '@testing-library/jest-dom';
import { describe, test, expect } from '@jest/globals';
export {};

const fs = require('fs');
const path = require('path');

describe('TypeDoc Documentation', () => {
  let htmlContent: string;

  beforeAll(() => {
    const filePath = path.resolve(__dirname, '../../public/docs/index.html');
    htmlContent = fs.readFileSync(filePath, 'utf-8');
  });

  test('Documentation contains "IntuiCode" heading', () => {
    expect(htmlContent).toContain('<h1><a href="#md:intuicode">IntuiCode</a></h1>');
  });

  test('Documentation contains installation instructions', () => {
    expect(htmlContent).toContain('Step 1: Clone the Project');
    expect(htmlContent).toContain('//github.com/COS420-Fall24/TeamB.git');
  });

  test('Documentation contains authors', () => {
    expect(htmlContent).toContain('Jakob Sholler');
    expect(htmlContent).toContain('Dmitrii Tsutskov');
    expect(htmlContent).toContain('Ryan O&#39;Sullivan');
  });

  test('Documentation contains build steps', () => {
    expect(htmlContent).toContain('Step 1: Run <code>cd app</code>');
    expect(htmlContent).toContain('Step 2: Run <code>npm run build</code>');
  });

  test('Documentation contains run instructions', () => {
    expect(htmlContent).toContain('Step 1: Run <code>cd app</code>');
    expect(htmlContent).toContain('Step 2: Run <code>npm start</code>');
  });
});
