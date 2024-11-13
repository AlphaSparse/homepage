export default [
  {
    label: 'AlphaSparseLib',
    children: [
      {
        label: 'Hygon-DCU',
        children: [
          {
            label: 'spmv',
            children: [
              {
                label: 'csr',
                children: [
                  {
                    label: 'single',
                    file: [
                      {
                        url: '/AlphaSparseLib/single-1.png',
                        name: 'single-1.png',
                      },
                      {
                        url: '/AlphaSparseLib/single-2.png',
                        name: 'single-2.png',
                      },
                    ],
                    textInfo: ['测试信息', '测试平台：NVIDIA A100'],
                  },
                  {
                    label: 'double',
                    file: [
                      {
                        url: '/AlphaSparseLib/single-1.png',
                        name: 'single-1.png',
                      },
                      {
                        url: '/AlphaSparseLib/single-1.png',
                        name: 'single-2.png',
                      },
                    ],
                    textInfo: ['测试信息double', '测试平台：NVIDIA A100'],
                  },
                ],
              },
              {
                label: 'spmm',
              },
              {
                label: 'spgemm',
              },
              {
                label: 'sptrsv',
              },
              {
                label: 'sptrsm',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'NVIDIA-GPU',
    children: [
      {
        label: 'spmv',
        children: [
          {
            label: 'csr',
            children: [
              {
                label: 'single',
                file: [
                  {
                    url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                    name: 'single-1.png',
                  },
                  {
                    url: '/AlphaSparseLib/single-2.png',
                    name: 'single-2.png',
                  },
                ],
                textInfo: ['测试信息', '测试平台：NVIDIA A100'],
              },
              {
                label: 'double',
                file: [
                  {
                    url: '/AlphaSparseLib/single-1.png',
                    name: 'single-1.png',
                  },
                  {
                    url: '/AlphaSparseLib/single-2.png',
                    name: 'single-2.png',
                  },
                ],
                textInfo: ['测试信息', '测试平台：NVIDIA A100'],
              },
            ],
          },
          {
            label: 'spmm',
          },
          {
            label: 'spgemm',
          },
          {
            label: 'sptrsv',
          },
          {
            label: 'sptrsm',
          },
        ],
      },
    ],
  },
];
