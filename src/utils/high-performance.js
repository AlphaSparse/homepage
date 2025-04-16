export default [
  {
    label: 'AlphaSparseLib',
    children: [
      {
        label: 'Hygon-CPU',
        children: [
          {
            label: 'spmv',
            children: [
              {
                label: 'csr_s_1thread',
                file: [
                  {
                    url: '/Alphasparse/Hygon-CPU/spmv/csr/single/spmv_csr_s_dist_cpu.png',
                    name: 'spmv_csr_s_dist_cpu.png',
                  },
                  {
                    url: '/Alphasparse/Hygon-CPU/spmv/csr/single/spmv_csr_s_pdf_cpu.png',
                    name: 'spmv_csr_s_pdf_cpu.png',
                  },
                  {
                    url: '/Alphasparse/Hygon-CPU/spmv/csr/single/spmv_csr_s_bestAlg_cpu.png',
                    name: 'spmv_csr_s_bestAlg_cpu.png',
                  },
                ],
                dataSource: [
                  {
                    url: '/Alphasparse/Hygon-CPU/spmv/csr/single/spmv_csr_s_alg_cpu.csv',
                    name: 'spmv_csr_s_alg_cpu.csv',
                  },
                ],
                textInfo: ['测试信息', '测试平台: 海光CPU'],
              },
              {
                label: 'csr_s_1numa_8thread',
                file: [
                  {
                    url: '/Alphasparse/Hygon-CPU/spmv/csr/single/spmv_csr_s_dist_cpu_numa.png',
                    name: 'spmv_csr_s_dist_cpu_numa.png',
                  },
                  {
                    url: '/Alphasparse/Hygon-CPU/spmv/csr/single/spmv_csr_s_pdf_cpu_numa.png',
                    name: 'spmv_csr_s_pdf_cpu_numa.png',
                  },
                  {
                    url: '/Alphasparse/Hygon-CPU/spmv/csr/single/spmv_csr_s_bestAlg_cpu_numa.png',
                    name: 'spmv_csr_s_bestAlg_cpu_numa.png',
                  },
                ],
                dataSource: [
                  {
                    url: '/Alphasparse/Hygon-CPU/spmv/csr/single/spmv_csr_s_alg_cpu_numa.csv',
                    name: 'spmv_csr_s_alg_cpu_numa.csv',
                  },
                ],
                textInfo: ['测试信息', '测试平台: 海光CPU'],
              },
              {
                label: 'csr_d_1thread',
                file: [
                  {
                    url: '/Alphasparse/Hygon-CPU/spmv/csr/single/spmv_csr_1_d_cpu.png',
                    name: 'spmv_csr_d_cpu_1.png',
                  },
                ],
                textInfo: ['测试信息', '测试平台: 海光CPU'],
              },
              {
                label: 'csr_d_1numa_8thread',
                file: [
                  {
                    url: '/Alphasparse/Hygon-CPU/spmv/csr/single/spmv_csr_8_d_cpu.png',
                    name: 'spmv_csr_d_cpu_numa.png',
                  },
                ],
                textInfo: ['测试信息', '测试平台: 海光CPU'],
              },
            ],
          },
          {
            label: 'spmm',
            children: [
              {
                label: 'csr_s_1thread',
                file: [
                  {
                    url: '/Alphasparse/Hygon-CPU/spmm/csr/row/spmm_csr_rm_1_32_s_cpu.png',
                    name: 'spmm_csr_1_rm_32_s.png',
                  },
                  {
                    url: '/Alphasparse/Hygon-CPU/spmm/csr/row/spmm_csr_rm_1_64_s_cpu.png',
                    name: 'spmm_csr_1_rm_64_s.png',
                  },
                ],
                textInfo: ['测试信息', '测试平台: 海光CPU'],
              },
              {
                label: 'csr_s_1numa_8thread',
                file: [
                  {
                    url: '/Alphasparse/Hygon-CPU/spmm/csr/row/spmm_csr_rm_8_32_s_cpu.png',
                    name: 'spmm_csr_8_rm_32_s.png',
                  },
                  {
                    url: '/Alphasparse/Hygon-CPU/spmm/csr/row/spmm_csr_rm_8_64_s_cpu.png',
                    name: 'spmm_csr_8_rm_64_s.png',
                  },
                ],
                textInfo: ['测试信息', '测试平台: 海光CPU'],
              },
              {
                label: 'csr_d_1thread',
                file: [
                  {
                    url: '/Alphasparse/Hygon-CPU/spmm/csr/row/spmm_csr_rm_1_32_d_cpu.png',
                    name: 'spmm_csr_1_rm_32_d.png',
                  },
                  {
                    url: '/Alphasparse/Hygon-CPU/spmm/csr/row/spmm_csr_rm_1_64_d_cpu.png',
                    name: 'spmm_csr_1_rm_64_d.png',
                  },
                ],
                textInfo: ['测试信息', '测试平台: 海光CPU'],
              },
              {
                label: 'csr_s_1numa_8thread',
                file: [
                  {
                    url: '/Alphasparse/Hygon-CPU/spmm/csr/row/spmm_csr_rm_8_32_d_cpu.png',
                    name: 'spmm_csr_8_rm_32_d.png',
                  },
                  {
                    url: '/Alphasparse/Hygon-CPU/spmm/csr/row/spmm_csr_rm_8_64_d_cpu.png',
                    name: 'spmm_csr_8_rm_64_d.png',
                  },
                ],
                textInfo: ['测试信息', '测试平台: 海光CPU'],
              },
            ],
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
      {
        label: 'Hygon-DCU',
        children: [
          {
            label: 'spmv',
            children: [
              {
                label: 'csr_s',
                file: [
                  {
                    url: '/Alphasparse/Hygon-DCU/spmv/csr/single/spmv_csr_s_dist_dcu.png',
                    name: 'spmv_csr_s_dist_dcu.png',
                  },
                  {
                    url: '/Alphasparse/Hygon-DCU/spmv/csr/single/spmv_csr_s_pdf_dcu.png',
                    name: 'spmv_csr_s_pdf_dcu.png',
                  },
                  {
                    url: '/Alphasparse/Hygon-DCU/spmv/csr/single/spmv_csr_s_bestAlg_dcu.png',
                    name: 'spmv_csr_s_bestAlg_dcu.png',
                  },
                ],
                dataSource: [
                  {
                    url: '/Alphasparse/Hygon-DCU/spmv/csr/single/spmv_csr_s_dcu.csv',
                    name: 'spmv_csr_s_dcu.csv',
                  },
                ],
                textInfo: ['测试信息', '测试平台: 海光DCU Z100'],
              },
              {
                label: 'csr_d',
                file: [
                  {
                    url: '/Alphasparse/Hygon-DCU/spmv/csr/double/spmv_csr_d_dist_dcu.png',
                    name: 'spmv_csr_d_dist_dcu.png',
                  },
                  {
                    url: '/Alphasparse/Hygon-DCU/spmv/csr/double/spmv_csr_d_pdf_dcu.png',
                    name: 'spmv_csr_d_pdf_dcu.png',
                  },
                  {
                    url: '/Alphasparse/Hygon-DCU/spmv/csr/double/spmv_csr_d_bestAlg_dcu.png',
                    name: 'spmv_csr_d_bestAlg_dcu.png',
                  },
                ],
                dataSource: [
                  {
                    url: '/Alphasparse/Hygon-DCU/spmv/csr/double/spmv_csr_d_dcu.csv',
                    name: 'spmv_csr_d_dcu.csv',
                  },
                ],
                textInfo: ['测试信息', '测试平台: 海光DCU Z100'],
              },
            ],
          },
          {
            label: 'spmm',
            children: [
              {
                label: 'csr_s',
                file: [
                  {
                    url: '/Alphasparse/Hygon-DCU/spmm/csr/single/spmm_csr_rm_c64_s_dist_dcu.png',
                    name: 'spmm_csr_rm_c64_s_dist_dcu.png',
                  },
                  {
                    url: '/Alphasparse/Hygon-DCU/spmm/csr/single/spmm_csr_rm_c64_s_pdf_dcu.png',
                    name: 'spmm_csr_rm_c64_s_pdf_dcu.png',
                  },
                  {
                    url: '/Alphasparse/Hygon-DCU/spmm/csr/single/spmm_csr_rm_c64_s_bestAlg_dcu.png',
                    name: 'spmm_csr_rm_c64_s_bestAlg_dcu.png',
                  },
                ],
                dataSource: [
                  {
                    url: '/Alphasparse/Hygon-DCU/spmm/csr/single/f32_64_row.csv',
                    name: 'spmm_csr_rm_c64_f32.csv',
                  },
                ],
                textInfo: ['测试信息', '测试平台: 海光DCU Z100'],
              },
              {
                label: 'csr_d',
                file: [
                  {
                    url: '/Alphasparse/Hygon-DCU/spmm/csr/double/spmm_csr_rm_c64_d_dist_dcu.png',
                    name: 'spmm_csr_rm_c64_d_dist_dcu.png',
                  },
                  {
                    url: '/Alphasparse/Hygon-DCU/spmm/csr/double/spmm_csr_rm_c64_d_pdf_dcu.png',
                    name: 'spmm_csr_rm_c64_d_pdf_dcu.png',
                  },
                  {
                    url: '/Alphasparse/Hygon-DCU/spmm/csr/double/spmm_csr_rm_c64_d_bestAlg_dcu.png',
                    name: 'spmm_csr_rm_c64_d_bestAlg_dcu.png',
                  },
                ],
                dataSource: [
                  {
                    url: '/Alphasparse/Hygon-DCU/spmm/csr/double/f64_64_row.csv',
                    name: 'spmm_csr_rm_c64_f64.csv',
                  },
                ],
                textInfo: ['测试信息', '测试平台: 海光DCU Z100'],
              },
            ],
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
      {
        label: 'NVIDIA-GPU',
        children: [
          {
            label: 'spmv',
            children: [
              {
                label: 'csr_s',
                file: [
                  {
                    url: '/Alphasparse/NVIDIA-GPU/spmv/csr/single/spmv_csr_s_dist_gpu.png',
                    name: 'spmv_csr_s_dist_gpu.png',
                  },
                  {
                    url: '/Alphasparse/NVIDIA-GPU/spmv/csr/single/spmv_csr_s_pdf_gpu.png',
                    name: 'spmv_csr_s_pdf_gpu.png',
                  },
                  {
                    url: '/Alphasparse/NVIDIA-GPU/spmv/csr/single/spmv_csr_s_bestALg_gpu.png',
                    name: 'spmv_csr_s_bestAlg_gpu.png',
                  },
                ],
                dataSource: [
                  {
                    url: '/Alphasparse/NVIDIA-GPU/spmv/csr/single/spmv_csr_s_gpu.csv',
                    name: 'spmv_csr_s_gpu.csv',
                  },
                ],
                textInfo: ['测试信息', '测试平台: NVIDIA-GPU A100'],
              },
              {
                label: 'csr_d',
                file: [
                  {
                    url: '/Alphasparse/NVIDIA-GPU/spmv/csr/double/spmv_csr_d_dist_gpu.png',
                    name: 'spmv_csr_d_dist_gpu.png',
                  },
                  {
                    url: '/Alphasparse/NVIDIA-GPU/spmv/csr/double/spmv_csr_d_pdf_gpu.png',
                    name: 'spmv_csr_d_pdf_gpu.png',
                  },
                  {
                    url: '/Alphasparse/NVIDIA-GPU/spmv/csr/double/spmv_csr_d_bestAlg_gpu.png',
                    name: 'spmv_csr_d_bestAlg_gpu.png',
                  },
                ],
                dataSource: [
                  {
                    url: '/Alphasparse/NVIDIA-GPU/spmv/csr/double/spmv_csr_d_gpu.csv',
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
            children: [
              {
                label: 'csr_s',
                file: [
                  {
                    url: '/Alphasparse/NVIDIA-GPU/trsv/csr/single/sptrsv_csr_w-pre_analysis_s_dist_gpu.png',
                    name: 'sptrsv_csr_w-pre_analysis_s_dist_gpu.png',
                  },
                  {
                    url: '/Alphasparse/NVIDIA-GPU/trsv/csr/single/sptrsv_csr_w-pre_solve_s_dist_gpu.png',
                    name: 'sptrsv_csr_w-pre_solve_s_dist_gpu.png',
                  },
                  {
                    url: '/Alphasparse/NVIDIA-GPU/trsv/csr/single/sptrsv_csr_w-pre_s_break-even_point_gpu.png',
                    name: 'sptrsv_csr_w-pre_s_break-even_point_gpu.png',
                  },
                ],
                dataSource: [
                  {
                    url: '/Alphasparse/NVIDIA-GPU/trsv/csr/sptrsv_gpu.csv',
                    name: 'sptrsv_gpu.csv',
                  },
                ],
                textInfo: ['测试信息', '测试平台: NVIDIA-GPU A100'],
              },
              {
                label: 'csr_d',
                file: [
                  {
                    url: '/Alphasparse/NVIDIA-GPU/trsv/csr/double/sptrsv_csr_w-pre_analysis_d_dist_gpu.png',
                    name: 'sptrsv_csr_w-pre_analysis_d_dist_gpu.png',
                  },
                  {
                    url: '/Alphasparse/NVIDIA-GPU/trsv/csr/double/sptrsv_csr_w-pre_solve_d_dist_gpu.png',
                    name: 'sptrsv_csr_w-pre_solve_d_dist_gpu.png',
                  },
                  {
                    url: '/Alphasparse/NVIDIA-GPU/trsv/csr/double/sptrsv_csr_w-pre_d_break-even_point_gpu.png',
                    name: 'sptrsv_csr_w-pre_d_break-even_point_gpu.png',
                  },
                ],
                dataSource: [
                  {
                    url: '/Alphasparse/NVIDIA-GPU/trsv/csr/sptrsv_gpu.csv',
                    name: 'sptrsv_gpu.csv',
                  },
                ],
                textInfo: ['测试信息', '测试平台: NVIDIA-GPU A100'],
              },
            ],
          },
          {
            label: 'sptrsm',
          },
        ],
      },
    ],
  },
];
