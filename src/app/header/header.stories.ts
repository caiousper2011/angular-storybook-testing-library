import type { Meta, Story } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { AddressService } from '../services/address.service';
import { AddressMockService } from '../services/address-mock.service';
import { ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'App/Components/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  argTypes: {
    initialValue: {
      description: 'Valor inicial do campo',
      name: 'InitialValue',
      type: 'number',
    },
  },
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
  moduleMetadata: {
    providers: [{ provide: AddressService, useClass: AddressMockService }],
    imports: [ReactiveFormsModule],
  },
});

export const Sample = Template.bind({});
Sample.args = {
  initialValue: 1,
};
