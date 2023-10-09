import { ListItem } from '@/types/global';
import Mock, { Random } from 'mockjs';

export const getList: () => ListItem[] = () => {
  let num = 0;
  // 生成按顺序排列的数据
  function generateIndex() {
    const arr = ['A', 'B', 'C', 'D', 'E'];
    const index = num < arr.length ? num : num % arr.length;
    num++;
    return arr[index];
  }
  var data = Mock.mock({
    'list|100': [
      {
        'index|1': () => generateIndex(),
        'url|20': Random.image('1', Random.color(), ''),
        'name|1': '@cname()',
        'nickname|1': '@name()',
        'wechatAccount|1': '@email()',
        'area|1': '@county(true)',
      },
    ],
  });
  return data.list;
};
