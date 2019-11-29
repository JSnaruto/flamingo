import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import SidePanel from '.';
import Button from '../Button';
import Heading from '../Heading';
import Input from '../Input';
import Label from '../Label';

const stories = storiesOf('SidePanel', module);

stories.add('Playground', () => {
  const isOpen = boolean('Is Open?', true);
  const withLargeContent = boolean('With large content?', false);
  const withFooter = boolean('With footer?', true);

  const content = (
    <>
      <Label htmlFor='input'>Name</Label>
      <Input id='input' placeholder="I'm an input..." />
    </>
  );

  return (
    <>
      <Heading>SidePanel</Heading>

      <SidePanel
        title={text('Title', 'Side Panel Title')}
        footer={
          withFooter && (
            <>
              <Button
                intent={Button.INTENTS.SECONDARY}
                variant={Button.VARIANTS.MINIMAL}
              >
                Abort
              </Button>
              <Button>Ok, go!</Button>
            </>
          )
        }
        isOpen={isOpen}
      >
        {[...new Array(withLargeContent ? 30 : 1)].map((el, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i}>{content}</div>
        ))}
      </SidePanel>
    </>
  );
});
