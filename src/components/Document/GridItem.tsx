import { Button } from '@arco-design/web-react';
import { BaseDocItemProps, ValueDisplay } from './list';
import { useTranslation } from 'react-i18next';
import { Descriptions } from '@douyinfe/semi-ui';

export const GridItem = ({ doc, onClickDocumentDel, onClickDocumentUpdate }: BaseDocItemProps) => {
  const { t } = useTranslation('document');

  return (
    <div
      className={`rounded-xl px-3 py-5 bg-primary-50/20 border border-transparent hover:border-primary group relative overflow-hidden`}
    >
      <Descriptions
        data={Object.entries(doc.content).map(([k, v]) => ({
          key: k,
          value: <ValueDisplay name={k} value={v} />,
        }))}
      />
      <div
        className={`absolute right-0 bottom-0 opacity-95 invisible group-hover:visible p-1.5 flex items-center gap-2`}
      >
        <Button type="secondary" size="mini" status="warning" onClick={() => onClickDocumentUpdate(doc)}>
          {t('common:update')}
        </Button>
        <Button type="secondary" size="mini" status="danger" onClick={() => onClickDocumentDel(doc)}>
          {t('common:delete')}
        </Button>
      </div>
    </div>
  );
};