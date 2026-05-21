'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

const CAL_LINK = 'musiki-sithomola-akzuxi/portfolio-call';
const CAL_NAMESPACE = 'portfolio-call';

type CalBookingEmbedProps = {
  date: Date;
  time: string;
};

function formatDateYmd(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function CalBookingEmbed({ date, time }: CalBookingEmbedProps) {
  const dateYmd = formatDateYmd(date);

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
      key={`${dateYmd}-${time}`}
      namespace={CAL_NAMESPACE}
      calOrigin="https://cal.com"
      embedJsUrl="https://cal.com/embed/embed.js"
      calLink={CAL_LINK}
      config={{
        layout: 'column_view',
        date: dateYmd,
      }}
      className="min-h-[360px] w-full overflow-auto sm:min-h-[480px]"
      style={{ width: '100%' }}
    />
  );
}
