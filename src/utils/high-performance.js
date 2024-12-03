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
                    label: 'single',
                    file: [
                      {
                        url: '/AlphaSparseLib/Alphasparse/Hygon-DCU/spmv/csr/spmv_csr_s_dist_dcu.png',
                        name: 'spmv_csr_s_dist_dcu.png',
                      },
                      {
                        url: '/AlphaSparseLib/Alphasparse/Hygon-DCU/spmv/csr/spmv_csr_s_pdf_dcu.png',
                        name: 'spmv_csr_s_pdf_dcu.png',
                      },
                      {
                        url: '/AlphaSparseLib/Alphasparse/Hygon-DCU/spmv/csr/spmv_csr_s_bestAlg_dcu.png',
                        name: 'spmv_csr_s_bestAlg_dcu.png',
                      },                      
                    ],
                    dataSource: [
                      {
                        url: '/AlphaSparseLib/Alphasparse/Hygon-DCU/spmv/csr/spmv_csr_s_dcu.csv',
                        name: 'spmv_csr_s_dcu.csv',
                      },
                    ],
                    textInfo: ['测试信息', '测试平台: 海光DCU Z100'],
                  },
                  {
                    label: 'double',
                    file: [
                      {
                        url: '/AlphaSparseLib/Alphasparse/Hygon-DCU/spmv/csr/spmv_csr_d_dist_dcu.png',
                        name: 'spmv_csr_d_dist_dcu.png',
                      },
                      {
                        url: '/AlphaSparseLib/Alphasparse/Hygon-DCU/spmv/csr/spmv_csr_d_pdf_dcu.png',
                        name: 'spmv_csr_d_pdf_dcu.png',
                      },
                      {
                        url: '/AlphaSparseLib/Alphasparse/Hygon-DCU/spmv/csr/spmv_csr_d_bestAlg_dcu.png',
                        name: 'spmv_csr_d_bestAlg_dcu.png',
                      },                      
                    ],
                    dataSource: [
                      {
                        url: '/AlphaSparseLib/Alphasparse/Hygon-DCU/spmv/csr/spmv_csr_d_dcu.csv',
                        name: 'spmv_csr_d_dcu.csv',
                      },
                    ],
                    textInfo: ['测试信息','测试平台: 海光DCU Z100'],
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
    children:[
       {
        label: 'NVIDIA-GPU',
        children: [
          {
            label: 'spmv',
            children: [
                  {
                    label: 'single',
                    file: [
                      {
                        url: '/AlphaSparseLib/Alphasparse/NVIDIA-GPU/spmv/csr/spmv_csr_s_dist_gpu.png',
                        name: 'spmv_csr_s_dist_gpu.png',
                      },
                      {
                        url: '/AlphaSparseLib/Alphasparse/NVIDIA-GPU/spmv/csr/spmv_csr_s_pdf_gpu.png',
                        name: 'spmv_csr_s_pdf_gpu.png',
                      },
                      {
                        url: '/AlphaSparseLib/Alphasparse/NVIDIA-GPU/spmv/csr/spmv_csr_s_bestAlg_gpu.png',
                        name: 'spmv_csr_s_bestAlg_gpu.png',
                      },                      
                    ],
                    dataSource: [
                      {
                        url: '/AlphaSparseLib/Alphasparse/NVIDIA-GPU/spmv/csr/spmv_csr_s_gpu.csv',
                        name: 'spmv_csr_s_gpu.csv',
                      },
                    ],
                    textInfo: ['测试信息', '测试平台: NVIDIA-GPU A100'],
                  },
                  {
                    label: 'double',
                    file: [
                      {
                        url: '/AlphaSparseLib/Alphasparse/NVIDIA-GPU/spmv/csr/spmv_csr_d_dist_gpu.png',
                        name: 'spmv_csr_d_dist_gpu.png',
                      },
                      {
                        url: '/AlphaSparseLib/Alphasparse/NVIDIA-GPU/spmv/csr/spmv_csr_d_pdf_gpu.png',
                        name: 'spmv_csr_d_pdf_gpu.png',
                      },
                      {
                        url: '/AlphaSparseLib/Alphasparse/NVIDIA-GPU/spmv/csr/spmv_csr_d_bestAlg_gpu.png',
                        name: 'spmv_csr_d_bestAlg_gpu.png',
                      },                      
                    ],
                    dataSource: [
                      {
                        url: '/AlphaSparseLib/Alphasparse/NVIDIA-GPU/spmv/csr/spmv_csr_d_gpu.csv',
                        name: 'spmv_csr_d_gpu.csv',
                      },
                    ],
                    textInfo: ['测试信息', '测试平台: NVIDIA-GPU A100'],
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
    ]
  },
];
