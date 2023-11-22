import React from "react";

const AvatarIcon = ({ ...props }) => {
  return (
    <svg
      width={1200}
      height={1200}
      viewBox="0 0 1200 1200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_409_3640"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={1197}
        height={1197}
      >
        <circle cx={598.033} cy={598.033} r={598.033} fill="#ffffff" />
      </mask>
      <g mask="url(#mask0_409_3640)">
        <path
          d="M925.883 1091.76C923.138 1093.73 920.001 1095.69 917.256 1097.65C914.118 1099.61 911.373 1101.57 908.236 1103.14C905.491 1104.71 903.138 1106.27 900.393 1107.84C900.001 1108.24 899.609 1108.24 899.216 1108.63C890.197 1114.12 880.785 1119.22 871.373 1123.92C868.628 1125.49 865.491 1127.06 862.746 1128.24C862.746 1128.24 862.354 1128.63 861.962 1128.63C858.824 1130.2 855.687 1131.76 852.55 1133.33C846.275 1136.47 839.609 1139.22 833.334 1141.96C830.197 1143.53 826.667 1144.71 823.53 1145.88C820.393 1147.06 816.864 1148.63 813.726 1149.8C810.589 1150.98 807.06 1152.55 803.922 1153.73C803.922 1153.73 803.922 1153.73 803.53 1153.73C800.393 1154.9 796.864 1156.08 793.726 1157.25C786.667 1159.61 779.216 1161.96 772.158 1164.31C769.805 1165.1 767.06 1165.88 764.707 1166.67C757.256 1169.02 749.805 1170.98 742.354 1172.55C739.609 1173.33 736.864 1173.73 733.726 1174.51C726.667 1176.08 719.216 1177.65 712.158 1179.22C710.589 1179.61 709.413 1179.61 707.844 1180C705.491 1180.39 702.746 1180.78 700.393 1181.18C696.864 1181.57 693.726 1182.35 690.197 1182.74C688.628 1183.14 687.06 1183.14 685.491 1183.53C683.53 1183.92 681.177 1184.31 678.824 1184.31C672.55 1185.1 665.883 1185.88 659.609 1186.67C657.648 1187.06 655.295 1187.06 653.334 1187.45H652.942C650.197 1187.84 647.452 1187.84 644.707 1188.24C641.962 1188.63 639.217 1188.63 636.471 1188.63C634.903 1188.63 632.942 1189.02 631.373 1189.02C628.236 1189.02 625.491 1189.41 622.746 1189.41C618.824 1189.41 615.295 1189.8 611.373 1189.8C607.452 1189.8 603.922 1189.8 600.001 1189.8C597.256 1189.8 594.511 1189.8 591.765 1189.8C426.275 1187.45 277.648 1117.25 171.373 1005.88C171.373 1005.88 171.373 1005.49 170.981 1005.49C159.216 994.902 169.413 938.431 216.864 902.745C276.471 857.647 419.217 829.412 419.217 829.412C419.217 829.412 474.511 820.392 679.609 863.137C799.609 888.235 890.981 924.706 941.962 1023.53C952.55 1043.92 963.138 1075.29 925.883 1091.76Z"
          fill="white"
        />
        <path
          d="M680.785 858.823C756.079 874.118 836.471 890.588 898.432 940.392C919.216 957.255 932.942 981.961 944.315 1005.88C949.805 1017.65 955.295 1029.8 959.609 1042.75C961.962 1051.37 965.491 1061.18 963.53 1071.37C963.138 1074.12 960.785 1077.65 958.824 1079.61C949.805 1088.63 940.001 1094.12 930.197 1101.18C872.55 1141.18 806.275 1169.41 737.648 1184.31C584.707 1217.65 419.216 1191.76 284.707 1111.37C240.001 1084.31 198.824 1051.37 163.53 1012.55C159.609 1007.84 159.609 1000 159.609 994.902C160.001 983.137 163.138 971.765 167.06 961.176C176.471 936.863 188.628 912.549 209.413 895.686C224.315 885.49 240.393 876.863 256.864 869.804C308.628 847.843 363.138 832.549 419.216 826.274C423.922 825.882 424.707 832.549 420.001 833.333C366.275 844.314 312.942 860.784 263.138 883.137C245.099 892.157 225.883 900 211.373 914.118C197.648 929.02 187.844 947.451 180.001 966.274C174.903 977.647 171.373 995.686 172.942 1004.71C197.648 1034.12 226.667 1060 258.04 1082.35C429.805 1202.35 690.589 1210.2 873.334 1110.2C889.805 1101.18 905.883 1090.98 921.177 1080.39C928.628 1075.29 936.471 1070.98 942.354 1065.1C942.746 1064.71 942.354 1065.1 942.354 1065.49C942.354 1065.88 941.962 1066.27 941.962 1066.27C942.354 1061.57 940.785 1055.29 938.824 1049.02C931.765 1026.27 920.393 1002.35 908.236 981.569C889.02 950.588 856.471 930.98 823.53 915.294C800.785 904.706 776.863 896.471 752.55 888.627C728.236 880.784 703.53 874.118 678.824 868.235C672.55 866.667 674.511 857.647 680.785 858.823Z"
          fill="black"
        />
        <path
          d="M1056.08 1334.9H64.3162C64.3162 1334.9 122.748 1211.77 148.63 1071.37C166.669 974.118 180.002 917.256 230.591 885.883C266.277 863.922 342.748 841.177 375.689 829.413C398.042 821.569 402.748 828.236 418.826 823.922C418.826 825.883 419.218 827.452 419.218 829.413C419.218 829.413 461.571 955.295 571.767 1000C661.571 1036.47 714.904 1012.16 723.14 971.765C728.238 945.883 712.159 903.53 703.924 889.805C699.218 885.883 696.081 880.001 694.512 874.118L691.375 861.177C698.826 859.609 705.885 857.648 712.944 855.295C715.297 854.511 717.257 853.726 719.61 852.942C764.708 864.707 861.179 902.746 903.924 941.962C920.787 957.648 960.787 1036.08 986.669 1149.8C1016.47 1278.82 1056.08 1334.9 1056.08 1334.9Z"
          fill="black"
        />
        <path
          d="M1065.1 1339.61C769.805 1341.57 355.295 1346.27 64.7068 1345.1C57.648 1345.1 52.55 1337.25 55.6872 1330.98C90.5892 1254.12 118.04 1172.16 135.687 1089.41C137.648 1078.82 141.962 1058.04 143.923 1047.45C152.942 1004.31 160.001 961.569 183.138 921.961C190.981 909.019 201.177 896.863 213.334 887.059C225.099 877.647 238.824 870.588 252.55 864.314C296.472 845.49 340.785 830.588 385.883 816.863C396.472 814.51 407.06 817.255 417.256 814.902C423.138 813.333 429.413 817.647 429.805 823.921L430.197 829.412L419.609 819.608C423.923 819.608 427.844 822.353 429.021 826.274C432.158 835.294 436.472 844.706 440.785 853.725C454.119 880.784 470.589 906.274 490.589 928.627C516.864 958.431 549.805 981.961 587.452 995.294C625.491 1009.41 693.334 1021.57 712.158 976.078C715.295 967.843 714.903 959.216 713.726 950.196C710.981 931.765 704.707 912.157 695.687 895.686L697.648 898.039C691.373 889.804 689.021 880 689.805 870.588V862.353V861.176C689.805 860.392 690.589 859.608 691.374 859.608C696.079 858.039 700.393 856.078 705.099 854.51C709.413 852.549 713.726 850.588 718.04 848.235C719.217 847.451 720.393 847.843 721.57 848.235C747.452 854.902 772.158 863.921 796.864 874.117C833.726 889.412 870.197 906.667 901.962 931.372C913.334 939.608 921.57 951.765 928.236 963.921C941.57 987.451 952.158 1011.76 961.57 1036.47C978.04 1079.61 990.197 1124.31 1000.79 1169.41C1014.12 1219.22 1030.2 1268.63 1054.9 1314.12C1057.65 1318.82 1060.39 1323.53 1063.14 1328.24L1063.92 1329.02V1329.41C1066.28 1331.37 1066.67 1336.86 1065.1 1339.61ZM1047.06 1330.2C1045.1 1332.16 1045.49 1337.65 1047.06 1339.61V1339.22L1046.28 1338.04C1018.82 1292.94 1001.57 1242.35 987.452 1191.76C980.393 1167.06 975.295 1140.39 968.236 1115.29C954.511 1065.88 937.648 1016.08 912.942 970.98C908.628 963.529 903.923 955.294 898.04 949.412C886.668 938.823 873.334 930.196 860.001 921.961C838.04 909.019 814.511 897.647 790.589 887.843C766.668 878.039 742.354 869.019 717.648 862.353L723.53 861.961C712.942 862.745 702.746 863.137 692.55 862.745L694.119 860.392C696.472 864.314 699.217 870.98 701.57 874.51C704.315 878.039 707.452 880.784 710.981 882.353C711.766 883.137 712.55 883.921 712.942 884.706C727.06 911.765 741.177 952.157 730.981 982.353C707.452 1041.57 628.628 1032.16 580.393 1013.73C540.001 1000 503.53 973.725 475.295 941.569C447.06 909.412 424.707 872.549 409.805 832.549L419.217 839.216C413.726 839.216 409.413 835.294 409.021 829.804L408.628 824.706L421.177 833.725C417.256 834.902 412.55 835.294 408.236 835.686C397.256 835.294 389.805 834.902 379.609 838.823C366.275 843.529 352.55 848.235 338.824 852.549C311.766 861.568 285.099 870.98 259.609 882.353C201.57 905.49 184.707 951.765 171.373 1009.41C165.099 1036.08 160.001 1066.27 154.511 1093.33C136.472 1178.04 109.021 1260 73.3343 1339.22L64.3147 1324.71C348.628 1324.71 758.824 1327.45 1047.06 1330.2Z"
          fill="black"
        />
        <path
          d="M538.04 1041.18C402.746 980.392 350.197 871.765 360.393 842.353C360.393 842.353 360.393 841.961 360.785 841.569C367.844 827.059 379.217 815.294 393.334 807.059C401.178 802.353 409.805 798.039 416.864 795.686C523.923 769.02 665.883 814.118 713.727 855.294C730.981 876.079 748.629 896.863 755.295 951.765C764.707 1030.98 678.04 1104.31 538.04 1041.18Z"
          fill="white"
        />
        <path
          d="M536.079 1045.49C468.236 1014.9 404.707 967.059 368.629 900.784C361.57 887.059 355.295 872.941 353.334 856.863C352.942 851.373 352.55 844.706 355.295 839.216C363.531 822.745 378.432 809.804 394.903 801.961C407.452 795.294 421.178 790.588 434.903 786.274C454.511 782.745 474.119 781.569 494.119 781.961C559.609 783.922 624.707 801.176 682.746 831.373C687.06 833.725 691.374 836.078 695.687 838.823C697.256 839.608 698.432 840.784 700.393 840.392C702.354 840 703.923 840.784 705.491 841.569C710.197 844.314 714.119 847.843 718.432 851.765C729.021 864.706 739.609 878.431 746.668 894.118C753.727 909.804 757.648 926.667 760.001 943.137C766.276 976.863 754.903 1014.51 728.629 1037.65C675.295 1085.49 595.295 1072.55 536.079 1045.49ZM539.609 1037.25C583.53 1056.47 633.727 1068.63 680.393 1053.73C718.04 1042.35 749.021 1008.24 750.197 968.235C750.589 944.706 745.099 920 735.687 898.431C730.589 885.098 716.472 868.235 709.413 859.608C705.099 856.078 700.393 853.333 696.472 849.804C696.08 849.02 695.687 848.235 695.295 847.451C694.511 845.49 692.942 845.098 691.766 843.922C687.844 841.569 683.53 839.216 679.217 836.863C645.099 819.216 607.452 809.02 569.805 801.569C525.883 793.333 480.785 790.98 436.472 797.255C430.197 798.039 423.531 797.255 417.256 798.823C412.55 800.784 403.923 804.706 398.432 808.627C384.315 816.863 373.727 829.02 366.276 843.529L365.883 843.922C365.883 844.314 365.491 845.098 365.491 845.49C363.53 861.961 371.374 878.823 378.825 894.118C385.491 906.667 393.334 918.823 402.354 930.588C438.432 977.255 486.668 1013.33 539.609 1037.25Z"
          fill="black"
        />
        <path
          d="M717.648 963.137C709.413 1003.53 656.079 1027.84 566.275 991.372C472.942 953.725 432.55 863.921 422.354 837.255C477.648 733.725 439.217 661.961 439.217 661.961C566.667 650.98 678.04 800 678.04 800L695.295 873.725C696.864 880 700.001 885.49 704.707 889.412C712.942 903.921 722.746 937.255 717.648 963.137Z"
          fill="white"
        />
        <path
          d="M420.395 838.431C427.846 827.059 432.552 813.726 435.689 800.784C441.571 773.726 443.532 746.275 443.924 718.824V708.627C442.748 698.431 439.218 687.843 435.297 678.431C430.199 665.882 448.63 658.039 454.512 670.588C455.297 672.157 455.297 674.902 455.297 676.471C456.473 729.804 458.826 798.431 425.101 842.745C422.748 845.098 418.042 841.569 420.395 838.431Z"
          fill="black"
        />
        <path
          d="M682.354 799.216C688.237 802.745 690.197 807.451 690.982 812.157C693.335 821.569 692.55 831.765 694.903 841.569C696.864 850.981 702.746 860 704.315 869.804C706.276 880 712.158 901.569 714.511 912.157C715.295 914.51 713.727 917.255 710.982 917.647C709.413 918.04 708.237 917.647 707.06 916.863C701.962 912.549 699.609 908.236 696.472 902.745C691.374 893.334 687.845 884.706 684.707 874.118C681.962 864.706 683.139 854.51 680.786 844.706C678.825 835.294 673.335 826.275 671.374 816.471C670.197 811.765 669.805 806.667 673.335 800.785C675.688 798.432 679.609 797.647 682.354 799.216Z"
          fill="black"
        />
        <path
          d="M710.591 902.745C635.689 898.823 574.512 875.294 514.905 769.02C565.101 813.333 624.316 830.196 686.669 838.039L694.905 874.117C696.473 880.392 705.885 898.823 710.591 902.745Z"
          fill="black"
        />
        <path
          d="M707.455 888.235C720.788 913.333 728.632 944.706 720.396 972.549C714.122 992.157 696.083 1006.67 676.475 1012.16C630.985 1024.31 578.436 1005.1 538.043 983.529C488.239 955.686 451.377 909.019 427.847 858.039C426.279 854.117 431.769 850.98 434.122 854.902C442.357 871.372 451.769 887.451 462.357 901.961C472.945 916.863 485.102 930.588 498.828 942.745C538.828 978.823 592.945 1001.18 647.063 1001.18C702.749 999.608 723.926 970.196 710.985 916.078C709.024 907.451 705.886 898.431 701.573 890.98C699.22 887.843 705.102 884.314 707.455 888.235Z"
          fill="black"
        />
        <path
          d="M859.217 417.255C866.276 450.196 860.786 472.157 857.648 563.137C821.569 713.725 824.315 797.255 804.315 817.255C788.629 832.941 694.903 853.334 625.491 835.686C590.197 826.667 560.393 806.275 536.08 791.765C505.491 773.333 482.354 713.333 460.393 676.863C443.139 648.235 441.178 685.883 418.825 661.177C387.844 627.451 350.59 559.608 369.021 439.608C398.825 245.098 552.942 222.353 667.06 243.922C781.57 265.49 840.393 330.588 859.217 417.255Z"
          fill="white"
        />
        <path
          d="M438.04 695.687C424.315 672.941 404.707 654.118 392.158 630.589C354.119 559.216 346.276 472.549 368.237 394.902C414.119 229.412 580.393 205.098 724.707 253.726C805.491 281.177 862.354 349.412 870.59 435.294C871.374 462.745 864.315 488.236 863.923 515.294C861.962 586.667 839.609 655.294 830.982 723.922C829.021 745.491 829.021 768.236 825.884 790.196C825.099 794.902 824.315 799.216 822.746 804.314C819.217 814.902 811.374 822.353 802.746 828.236C770.197 848.236 733.335 851.765 696.472 853.726C619.609 856.863 552.158 834.51 506.276 770.589C504.707 768.236 507.844 765.49 509.805 767.843C561.178 822.745 622.746 840.392 695.688 836.863C726.668 835.294 792.942 829.412 806.668 799.216C813.335 774.51 813.335 748.628 817.256 722.745C821.57 692.157 833.335 649.412 840.393 619.216C848.237 585.098 854.903 550.589 855.295 515.687C855.688 498.04 855.688 480.392 855.688 462.745C856.472 445.098 852.942 429.804 848.629 412.941C832.942 345.883 784.707 290.196 719.609 265.49C655.688 240.785 581.57 234.51 516.08 256.079C449.413 277.255 403.923 334.51 386.668 401.177C377.648 434.118 372.942 468.628 370.589 502.745C368.629 537.255 372.158 572.549 385.884 604.706C395.688 629.02 411.766 650.196 430.59 667.843L449.021 687.059C457.648 694.902 444.315 705.098 438.04 695.687Z"
          fill="black"
        />
        <path
          d="M484.315 570.981C484.315 570.981 472.158 512.157 414.903 519.216C365.492 525.49 348.237 643.922 460.393 676.863"
          fill="white"
        />
        <path
          d="M455.297 625.491C446.277 620.393 440.002 611.765 439.61 601.177C440.002 593.334 441.179 584.314 439.218 576.471C438.042 569.02 430.198 567.059 424.316 567.451C418.042 568.628 414.12 576.471 412.944 582.746C412.944 583.138 412.551 584.314 412.551 584.706C412.159 586.667 409.022 586.667 408.238 584.706C403.14 569.412 414.512 552.549 430.983 554.51C454.12 556.079 457.257 580.393 452.944 598.824C450.591 606.667 453.728 613.726 458.042 620.393L458.826 621.569C460.787 623.922 457.649 627.059 455.297 625.491Z"
          fill="black"
        />
        <path
          d="M769.021 529.412C774.903 557.255 785.884 583.137 799.609 607.451C811.766 637.255 780.393 665.49 752.55 664.314C749.413 664.314 749.021 660 751.766 659.216C769.413 653.726 785.491 641.961 788.237 623.922C789.413 618.432 787.844 613.726 785.099 609.02C772.158 584.706 764.315 556.863 766.276 529.412C766.276 527.451 769.021 527.451 769.021 529.412Z"
          fill="black"
        />
        <path
          d="M482.353 571.373C473.334 548.235 453.726 526.275 427.451 526.667C425.098 526.275 421.177 527.059 418.824 527.059C412.157 527.451 406.667 529.804 401.569 534.51C376.471 559.608 380.785 603.922 401.177 631.765C408.236 641.569 417.255 650.196 427.451 657.255C437.647 664.314 449.02 669.804 461.177 674.51C463.922 675.294 462.745 679.608 460 679.216C433.726 673.726 408.628 660.784 391.373 639.216C364.706 607.059 359.216 553.333 390.981 521.961C398.039 515.686 407.843 510.98 417.647 510.98C420.785 510.98 425.49 510.196 428.628 510.98C445.098 511.765 460.785 520 470.981 532.941C480 543.922 485.098 557.255 486.667 570.588C486.667 572.941 483.138 573.726 482.353 571.373Z"
          fill="black"
        />
        <path
          d="M739.216 703.529C714.118 727.451 666.667 708.235 654.118 679.216C652.549 675.686 656.471 672.549 659.608 674.117C666.275 677.647 672.157 681.176 678.432 683.921C696.471 692.157 715.294 698.823 735.294 696.863C739.216 696.078 741.961 700.784 739.216 703.529Z"
          fill="black"
        />
        <path
          d="M622.746 569.412C613.334 569.02 606.275 561.177 607.06 551.765L607.452 540.785C607.844 531.373 615.687 524.314 625.099 525.099C634.511 525.491 641.57 533.334 640.785 542.746L640.393 553.726C640.001 562.746 632.158 569.804 622.746 569.412Z"
          fill="black"
        />
        <path
          d="M787.843 575.295C779.215 574.903 772.549 567.452 772.941 558.824L773.333 548.628C773.725 540.001 781.176 533.334 789.803 533.726C798.431 534.119 805.098 541.57 804.705 550.197L804.313 560.393C803.921 569.02 796.47 575.687 787.843 575.295Z"
          fill="black"
        />
        <path
          d="M658.04 548.236C645.099 539.608 630.981 533.726 615.295 536.863C610.197 537.647 605.099 539.216 601.962 542.746C600.785 544.314 598.04 543.922 598.04 541.569C598.432 533.726 605.099 528.628 611.373 525.491C623.53 519.216 640.393 520.393 651.373 528.628C655.295 530.981 668.628 545.491 661.569 548.628C660.001 549.412 659.217 549.02 658.04 548.236Z"
          fill="black"
        />
        <path
          d="M770.197 550.197C770.197 533.726 790.589 527.844 803.138 533.726C810.197 536.863 815.295 543.138 817.256 550.589C818.04 552.942 814.511 554.903 812.942 552.942C806.275 545.099 794.903 541.177 785.883 545.883C783.138 547.452 782.746 548.628 781.962 550.197C781.962 558.04 770.589 557.648 770.197 550.197Z"
          fill="black"
        />
        <path
          d="M676.864 483.53C685.099 486.275 693.334 478.824 691.766 469.804C690.981 465.098 689.02 460.392 685.099 456.863C673.334 446.275 624.707 436.863 595.295 450.589C569.413 463.138 639.217 470.981 676.864 483.53Z"
          fill="black"
        />
        <path
          d="M794.12 489.804C787.453 492.157 780.394 485.098 781.571 476.863C781.963 472.549 783.532 468.236 786.669 465.098C796.081 455.687 828.237 448.236 848.63 462.745C866.277 474.902 824.708 478.432 794.12 489.804Z"
          fill="black"
        />
        <path
          d="M909.804 443.529C898.823 477.647 872.549 506.274 855.686 525.49C859.608 507.059 856.078 496.078 856.863 483.137C858.039 465.49 864.314 445.882 863.137 438.039C862.353 430.98 860.784 424.314 859.215 417.255C857.255 408.627 854.902 400.392 852.157 392.157C790.588 452.157 685.098 392.941 685.098 392.941C685.098 392.941 662.745 411.372 623.529 407.059C581.568 402.745 570.196 376.863 570.196 376.863C558.823 456.078 483.921 425.882 497.647 504.706C501.568 526.274 501.568 547.059 483.137 568.627C480 557.647 464.706 512.941 414.51 519.216C367.059 525.098 349.019 634.902 447.059 672.549C445.882 709.02 449.804 758.431 445.882 745.49C418.431 660.784 363.529 674.118 337.647 610.196C325.49 579.608 327.451 552.549 333.725 532.549C340 513.333 339.608 492.549 333.333 473.333C326.274 450.98 320.784 417.255 333.725 376.47C355.686 306.667 402.745 290.588 414.902 282.353C427.059 274.118 421.176 198.823 506.274 175.294C574.117 156.471 625.098 196.078 640 193.333C654.902 190.588 759.215 121.961 839.608 186.667C917.255 249.412 888.235 323.529 888.235 323.529C888.235 323.529 936.47 360.784 909.804 443.529Z"
          fill="black"
        />
        <path
          d="M685.099 617.647C685.099 617.647 648.236 640.784 606.667 640.392C565.099 640 560.001 607.451 559.608 589.804C559.608 589.804 565.099 615.294 590.197 624.706C614.903 634.117 685.099 617.647 685.099 617.647Z"
          fill="black"
        />
        <path
          d="M803.527 613.333C803.527 613.333 812.547 624.313 824.704 632.157C832.939 637.647 843.919 631.764 843.919 621.961C843.919 621.961 821.174 623.137 803.527 613.333Z"
          fill="black"
        />
        <path
          d="M698.822 512.941C677.645 510.98 624.312 506.667 603.92 504.706L588.233 503.529C575.292 502.745 565.096 513.725 562.743 526.274C561.959 530.196 561.959 536.863 561.959 540.784V556.863C561.959 566.667 561.567 576.863 565.096 586.275C571.371 608.235 591.371 625.882 614.9 623.137C617.253 622.745 631.763 621.176 634.508 620.784L666.273 617.255C676.469 616.471 685.88 613.726 694.9 608.235C707.449 600.784 719.606 589.412 718.822 573.333L719.606 557.647C720.39 538.039 725.88 514.902 698.822 512.941ZM699.998 500C718.429 501.569 730.978 520.784 729.802 538.431C729.802 540.784 729.018 555.686 728.625 558.431C728.625 561.569 727.841 575.686 727.449 578.431C725.488 605.098 695.684 623.922 671.371 627.451C658.822 629.02 632.547 632.549 619.998 634.118C616.861 634.51 612.547 634.902 609.41 635.294C607.841 635.294 604.312 634.902 602.743 634.902C569.41 630.588 548.233 596.471 549.018 564.706C549.018 559.608 549.018 546.274 549.018 540.784C549.018 538.039 549.018 530.98 549.41 528.235C550.586 514.51 558.037 501.176 570.586 493.725C576.076 490.588 582.743 489.02 589.41 489.412L605.488 490.98C625.096 493.333 679.214 498.431 699.998 500Z"
          fill="black"
        />
        <path
          d="M790.979 506.274C799.607 505.098 841.96 500.392 849.803 499.608C851.764 499.608 856.862 498.823 858.43 498.823C875.293 496.47 883.136 514.902 884.705 528.627C885.489 540.784 884.705 552.549 885.097 564.314C885.097 572.549 884.313 580.784 882.352 588.627C877.254 609.804 862.352 632.157 837.646 625.098C831.764 623.921 819.999 622.353 814.509 621.176L808.627 620C797.254 618.039 787.842 610.196 781.568 601.568C769.803 587.843 772.156 569.412 770.979 552.941C769.411 536.47 769.803 510.98 790.979 506.274ZM792.548 517.647C780.391 523.137 783.529 541.568 783.529 552.549L784.313 576.078C784.705 590.98 796.47 605.882 810.587 609.804C814.117 610.588 823.921 612.549 827.842 613.333L839.215 615.686C867.45 624.706 878.43 585.49 878.038 563.921C876.862 545.882 882.352 524.314 869.411 509.804C866.274 506.666 863.136 505.882 859.607 506.666C857.646 507.059 852.548 507.843 850.979 508.235C843.136 509.804 800.783 516.47 792.548 517.647Z"
          fill="black"
        />
        <path
          d="M555.293 542.745C552.156 549.804 549.411 549.02 543.921 549.02L532.548 548.628C518.038 547.843 501.96 546.667 487.45 544.706C479.607 543.53 471.372 542.353 463.528 540.392C460.391 539.608 458.43 536.471 459.215 533.333C459.999 530.588 462.352 528.628 465.097 529.02L487.842 530.196L510.587 530.98C518.038 531.373 537.254 531.765 544.705 532.157C548.626 532.157 552.156 532.549 556.077 531.373C557.646 530.981 559.215 531.765 559.607 533.333C559.999 534.118 559.607 534.51 559.607 535.294L555.293 542.745Z"
          fill="black"
        />
        <path
          d="M722.352 534.51C736.47 526.667 773.724 515.686 780.783 536.863C783.921 542.353 775.685 547.451 772.156 541.961C772.156 542.745 770.195 541.961 769.411 541.961C754.509 540.784 739.215 543.137 724.313 544.314C718.038 545.098 716.862 536.863 722.352 534.51Z"
          fill="black"
        />
        <path
          d="M1130.2 330.588C1368.24 789.02 949.804 1306.27 450.98 1180C227.059 1124.31 47.0589 930.196 9.80403 702.353C-32.5489 475.686 69.804 232.157 261.177 103.922C523.53 -76.4704 887.059 -16.4704 1074.9 241.569C1076.08 242.745 1075.69 244.706 1074.12 245.883C1072.94 247.059 1070.98 246.667 1069.8 245.098C1043.92 211.765 1014.51 181.569 982.353 154.51C929.412 109.412 867.451 74.1179 801.961 50.1963C468.628 -70.588 102.745 130.196 29.804 478.824C-52.5489 869.412 279.608 1229.02 675.686 1175.29C981.177 1136.86 1208.24 854.902 1183.14 548.235C1177.65 474.118 1158.04 400.785 1125.49 333.334C1124.71 332.157 1125.49 330.588 1126.67 329.804C1127.84 329.02 1129.41 329.412 1130.2 330.588Z"
          fill="black"
          className="dark:fill-white"
        />
      </g>
    </svg>
  );
};

export default AvatarIcon;
