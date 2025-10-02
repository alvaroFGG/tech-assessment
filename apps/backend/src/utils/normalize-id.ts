import { GenericObject } from '../types';

export function normalizeId(record: GenericObject) {
  if (!record?.id) return null;
  if (typeof record.id === 'object' && '$oid' in record.id) {
    return { ...record, id: record.id.$oid };
  }
  return record;
}
