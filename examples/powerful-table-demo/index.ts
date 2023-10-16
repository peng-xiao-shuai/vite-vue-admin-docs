import { toRefs, ref, onMounted, markRaw, onBeforeMount } from 'vue';
import type { PowerfulTableHeader } from 'el-plus-powerful-table-ts';
import { ElMessageBox } from 'element-plus/es';
import { Edit } from '@element-plus/icons-vue';
import { setData } from 'el-plus-powerful-table-ts/es';

type Lists = {
  id?: number;
  name?: string;
  engine?: string;
  manufacturer?: string;
  manufacturerHref?: string;
  icon?: string;
  brand?: string;
  createTime?: null | string;
  price?: string | number;
  switchVal?: number;
  tag?: (number | string)[] | string;
  rate?: number;
  content?: string;
  videoUrl?: string;
  imageUrl?: string;
  href?: string;
  cd?: Lists[];
  data?: string;
  driveType?: string;
  engineLocation?: string;
  [s: string]: any;
};

const lists: Lists[] = [
  {
    id: 1,
    brand: 'Audi',
    engine: '4.0T 600马力 V8',
    manufacturer: 'Audi Sport',
    manufacturerHref: 'https://www.audi.com.hk/hk/web/tc.html',
    name: 'RS 7 Sportback',
    href: 'https://www.audi.com.hk/hk/web/tc/models/a7/rs-7-sportback-2021.html',
    icon: 'viteaodi',
    price: 146.48,
    switchVal: 1,
    tag: ['red', 'gray'],
    rate: 4.5,
    content:
      '奥迪RS7概念车是由一位来自奥地利的设计者设计出来的，该车的车身外观融合了奥迪旗下多款车型的风格。 其侧面车身以及车位的设计与奥迪R8的设计十分相似，而汽车门则采用了兰博基尼经典的剪刀门设计方式。 2013北美（底特律）国际车展于14日开幕，奥迪全新RS7在车展上正式亮相并发布。',
    videoUrl:
      'http://tbvideo.ixiaochuan.cn/zyvd/264/89/61/84ca-3e46-11ed-87e3-00163e0e67b8',
    imageUrl: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b',
    data: '2021-12-12',
    driveType: '4',
    engineLocation: '前置',
  },
  {
    id: 2,
    brand: 'BMW',
    engine: '4.4T 625马力 V8',
    manufacturer: 'BMW',
    manufacturerHref: 'https://www.bmw.com/en/index.html',
    name: 'BMW 8 Series',
    href: 'https://offers.bmwhk.com/the8/en/?utm_medium=website&utm_source=bmwhk_modelshowroom&utm_campaign=468_Jan2021&utm_content=launch',
    icon: 'vitebaoma',
    price: 196.8,
    switchVal: 0,
    tag: ['white', 'red'],
    rate: 4.5,
    content:
      '宝马M8（BMW M8)是宝马旗下的顶级跑车，采用M部门为其量身打造的4.4T V8双涡轮增压引擎，最大功率可达625马力，峰值扭矩750牛米。这台引擎可以让1.9吨的大家伙在3.2秒内完成0-100加速。M，在宝马车系中代表顶级性能版。',
    imageUrl: 'https://images.unsplash.com/photo-1630037937485-e2da57394d88',
    data: '2022-01-01',
    driveType: '4',
    engineLocation: '前置',
  },
  {
    id: 3,
    brand: 'Audi',
    engine: '5.2L 620马力 V10',
    manufacturer: 'Audi Sport',
    manufacturerHref: 'https://www.audi.com.hk/hk/web/tc.html',
    name: 'R8 V10 performance',
    href: 'https://www.audi.com.hk/hk/web/tc/models/r8/r8-coupe-v10-performance-quattro.html',
    icon: 'viteaodi',
    price: 232.36,
    switchVal: 1,
    tag: ['blue'],
    rate: 5,
    content:
      '奥迪R8（Audi R8）是一款中置引擎双座跑车，由德国汽车制造商奥迪于2006年推出，极速达316km/h。奥迪R8是奥迪量产的首款中置引擎超级跑车，基于兰博基尼Gallardo的开发平台，融合了奥迪在多个运动赛事中取胜的经验，技术以及突破传统观念的完美设计。强劲的V8和V10发动机、全时四轮驱动系统和奥迪全铝车身空间框架结构，赋予了奥迪R8出众的动力性能，以及在赛道和公路上的卓越表现。',
    imageUrl: 'https://images.unsplash.com/photo-1614026480418-bd11fdb9fa06',
    data: '2021-12-12',
    driveType: '4',
    engineLocation: '前置',
  },
  {
    id: 4,
  },
];

const useBasicTableData = () => {
  const headers = ref<PowerfulTableHeader<Lists>[]>([
    {
      label: '编号', //显示的标题
      width: 60,
      props: {
        prop: 'id',
      },
    },
    {
      label: '制作厂', //显示的名称
      headerAlign: 'left',
      props: [
        {
          type: 'href',
          prop: 'manufacturerHref',
          text: '厂商：',
          data: setData<'href', Lists>({
            text: (row: any) => row.manufacturer,
            property: {
              underline: true,
            },
          }),
        },
        {
          prop: 'icon',
          type: 'iconfont',
          text: '车标：',
          data: setData<'iconfont', Lists>({
            class: 'viteIcon',
            style: {
              height: '40px',
              lineHeight: '40px',
              fontSize: '40px',
            },
          }),
        },
      ],
    },
    {
      label: '名称', //显示的名称
      headerAlign: 'left',
      width: 200,
      props: [
        {
          text: '品牌：',
          prop: 'brand',
          render: (h, row) =>
            h(
              'b',
              `${row.brand}（${{ Audi: '奥迪', BMW: '宝马' }[row.brand!]})`
            ),
        },
        {
          type: 'href',
          prop: 'href',
          text: '型号：',
          data: setData<'href', Lists>({
            text: (row) => row.name!,
          }),
        },
      ],
    },
    {
      label: '图片', //显示的标题
      props: [
        {
          type: 'image',
          prop: 'imageUrl',
          data: setData<'image', Lists>({
            style: {
              borderRadius: '10px',
            },
            property: ({ row, index, props }) => {
              return {
                // src: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF',
              };
            },
          }),
        },
      ],
    },
    {
      label: '售价', //显示的标题
      props: [
        {
          text: '收藏：',
          prop: 'switchVal',
          type: 'switch',
          data: setData<'switch', Lists>({
            property: {
              inactiveValue: 0,
              activeValue: 1,
            },
          }),
        },
        {
          prop: 'price',
          type: 'input',
          data: setData<'input', Lists>({
            slot: 'append',
            symbol: '万',
            style: { width: '100%' },
            property({ row, index, props }) {
              return {
                placeholder: '售价',
              };
            },
          }),
        },
      ],
    },
    {
      label: '发动机名称', // 此标题不会显示，因为配置了 自定义表头 headerSlotName
      width: 200,
      headerAlign: 'left',
      isShowOrFilterColumn: false,
      props: [
        {
          type: 'text',
          prop: 'engine',
          text: '发动机：',
          filters: (row) => row.engine!,
        },
        {
          type: 'rate',
          prop: 'rate',
          text: '评 分：',
          data: setData<'rate', Lists>({
            property: {
              disabled: false,
            },
          }),
        },
      ],
    },
    {
      label: '宣传视频', //显示的标题
      width: 200,
      isShowOrFilterColumn: 'show',
      defaultShow: false,
      props: {
        prop: 'videoUrl',
        type: 'video',
        data: setData<'video', Lists>({
          style: {
            width: '100%',
            height: '117px',
            borderRadius: '10px',
            overflow: 'hidden',
            border: '1px solid #ccc',
          },
          property: ({ row }) => ({
            poster: row.imageUrl,
            controls: true,
          }),
        }),
      },
    },
    {
      label: '简介', //显示的标题
      width: '300px',
      isShowOrFilterColumn: 'filter',
      props: [
        {
          prop: 'content',
          type: 'text',
          data: setData<'text', Lists>({
            develop: true,
            line: 2,
          }),
        },
      ],
    },
    {
      label: '操作', //显示的标题
      width: 250,
      fixed: 'right',
      isShowOrFilterColumn: false,
      props: [
        {
          type: 'btn',
          prop: 'btn',
          data: setData<'btn', Lists>([
            {
              tip: '编辑按钮',
              params: {
                emit: 'update',
              },
              beforeClick({ row, index, btnIndex, props, params }, resolve) {
                ElMessageBox.confirm('正在进行修改操作，确认要修改？', '提示', {
                  confirmButtonText: 'OK',
                  cancelButtonText: 'Cancel',
                  type: 'warning',
                }).then(() => {
                  resolve(true);
                });
              },
              property: {
                type: 'info',
                icon: markRaw(Edit),
              },
            },
            [
              {
                text: '更多',
                isMore: true,
                property: {
                  icon: markRaw(Edit),
                },
              },
              {
                text: '删除',
                params: 'remove',
                property: {
                  type: 'danger',
                  icon: markRaw(Edit),
                },
              },
            ],
          ]),
        },
      ],
    },
  ]);

  return {
    lists,
    headers,
  };
};

export { useBasicTableData, Lists };
