'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

const CAL_LINK = 'musiki-sithomola-akzuxi/portfolio-call';
const CAL_NAMESPACE = 'portfolio-call';

export function CalBookingEmbed() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({
        namespace: CAL_NAMESPACE,
        embedJsUrl: 'https://cal.com/embed/embed.js',
      });
      cal('ui', {
        theme: 'light',
        layout: 'column_view',
      });
    })();
  }, []);

  return (
    <Cal
      namespace={CAL_NAMESPACE}
      calOrigin="https://cal.com"
      embedJsUrl="https://cal.com/embed/embed.js"
      calLink={CAL_LINK}
      config={{
        layout: 'column_view',
      }}
      className="min-h-[420px] w-full overflow-auto sm:min-h-[520px]"
      style={{ width: '100%' }}
    />
  );
}
