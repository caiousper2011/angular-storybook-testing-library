import { render, screen } from '@testing-library/angular';
import { composeStory, createMountable } from '@storybook/testing-angular';
import Meta, { Sample as SampleStory } from './header.stories';
import { userEvent } from '@storybook/test';
import { tick, fakeAsync } from '@angular/core/testing';

const Sample = composeStory(SampleStory, Meta);

describe('HeaderComponent', () => {
  it('Check if initial value is shown', async () => {
    const { component, applicationConfig } = createMountable(Sample({}));

    await render(component, { providers: applicationConfig.providers });

    expect(
      (await screen.findByRole('heading', { level: 1 })).textContent
    ).toEqual('Contador em: 1');
  });

  it('Check if value is incremented', async () => {
    const { component, applicationConfig } = createMountable(Sample({}));

    const { detectChanges } = await render(component, {
      providers: applicationConfig.providers,
    });

    const increaseButton = await screen.findByRole('button');
    increaseButton.click();

    detectChanges();

    expect(
      (await screen.findByRole('heading', { level: 1 })).textContent
    ).toEqual('Contador em: 2');
  });

  it('Load address when user type zip code', fakeAsync(async () => {
    const { component, applicationConfig } = createMountable(Sample({}));

    const { detectChanges } = await render(component, {
      providers: applicationConfig.providers,
    });

    userEvent.setup({ delay: 1000 });
    const zipCodeField = screen.getByRole<HTMLInputElement>('form');
    userEvent.type(zipCodeField, '03928235');

    detectChanges();
    tick(600);

    expect(
      (await screen.findByRole('heading', { level: 2 })).textContent
    ).toEqual('Logradouro: Praça da Sé');
  }));
});
