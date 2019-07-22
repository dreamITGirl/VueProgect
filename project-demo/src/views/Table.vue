<template>
  <div class="container">
    <el-table :data="tableData" border  :span-method="objectSpanMethod">
        <el-table-column prop="operators" label="运营商" align="center" width="90" />
        <el-table-column prop="province" label="省份" align="center" width="100" />
        <el-table-column prop="room" label="机房" align="center" width="120" />
        <el-table-column prop="abbreviation" label="英文缩写" align="center" width="80" />
        <el-table-column prop="bandwidth" label="带宽" align="center" width="80" />
        <el-table-column prop="flow" label="流量" align="center" />
    </el-table>
  </div>
</template>
<script>
export default {
  name: "tableCom",
  data() {
    return {
      tableData: [
        {
          operators: "其他",
          province: "广东",
          room: "广州双线1",
          abbreviation: "GZ_DB2",
          bandwidth: "10G",
          flow:
            "第一条1G (no latest data,no latest data)第二条1G (no latest data,no latest data)"
        },
        {
          operators: "其他",
          province: "广东",
          room: "广州双线２",
          abbreviation: "GZ_DB2",
          bandwidth: "10G",
          flow:
            "第一条1G (no latest data,no latest data)第二条1G (no latest data,no latest data)"
        },
        {
          operators: "其他",
          province: "广东",
          room: "广州双线3",
          abbreviation: "GZ_DB2",
          bandwidth: "10G",
          flow:
            "第一条1G (no latest data,no latest data)第二条1G (no latest data,no latest data)"
        },
        {
          operators: "电信",
          province: "浙江",
          room: "广州双线２",
          abbreviation: "GZ_DB2",
          bandwidth: "10G",
          flow:
            "第一条10G (no latest data,no latest data)	第二条10G (no latest data,no latest data)	第三条10G (no latest data,no latest data)	第四条10G"
        },
        {
          operators: "电信",
          province: "浙江",
          room: "杭州双线２",
          abbreviation: "GZ_DB2",
          bandwidth: "10G",
          flow:
            "第一条10G (no latest data,no latest data)	第二条10G (no latest data,no latest data)	第三条10G (no latest data,no latest data)	第四条10G"
        },
        {
          operators: "联通",
          province: "江西",
          room: "杭州双线２",
          abbreviation: "GZ_DB2",
          bandwidth: "10G",
          flow:
            "第一条1G (no latest data,no latest data)第二条1G (no latest data,no latest data)"
        },
        {
          operators: "联通",
          province: "浙江",
          room: "浙江双线２",
          abbreviation: "GZ_DB2",
          bandwidth: "10G",
          flow:
            "第一条10G (no latest data,no latest data)	第二条10G (no latest data,no latest data)	第三条10G (no latest data,no latest data)	第四条10G"
        },
        {
          operators: "移动",
          province: "江西",
          room: "江西双线２",
          abbreviation: "GZ_DB2",
          bandwidth: "10G",
          flow:
            "第一条1G (no latest data,no latest data)第二条1G (no latest data,no latest data)"
        }
      ],
      rowIndex: "-1",
      OrderIndexArr: [],
      provinceArr: []
    };
  },
  methods: {
    merge() {
      let OrderObj = {};
      let provinceObj = {};
      this.tableData.forEach((element, index) => {
        element.rowIndex = index;
        if (OrderObj[element.operators]) {
          let nextItem = this.tableData[index + 1].operators
            ? this.tableData[index + 1].operators
            : undefined;
          let prevItem = this.tableData[index - 1].operators
            ? this.tableData[index - 1].operators
            : undefined;
          if (element.operators == nextItem) {
            OrderObj[element.operators].push(index);
          } else if (element.operators == prevItem) {
            OrderObj[element.operators].push(index);
          }
        } else {
          OrderObj[element.operators] = [];
          OrderObj[element.operators].push(index);
        }

        if (provinceObj[element.province]) {
          let nextPro = this.tableData[index + 1]
            ? this.tableData[index + 1].province
            : undefined;
          let prevPro = this.tableData[index - 1].province
            ? this.tableData[index - 1].province
            : undefined;
          if (element.province == nextPro) {
            provinceObj[element.province].push(index);
          } else if (element.province == prevPro) {
            provinceObj[element.province].push(index);
          }
        } else {
         
          provinceObj[element.province] = [];
          provinceObj[element.province].push(index);
        }
      });
      // 将数组长度大于1的值 存储到this.OrderIndexArr（也就是需要合并的项）
      for (let k in OrderObj) {
        if (OrderObj[k].length > 1) {
          this.OrderIndexArr.push(OrderObj[k]);
        }
      }
      for (let i in provinceObj) {
        if (provinceObj[i].length > 1) {
          this.provinceArr.push(provinceObj[i]);
        }
      }
      console.log(provinceObj);
    },
    objectSpanMethod({ row, rowIndex, column, columnIndex }) {
      if (columnIndex === 0) {
        for (let i = 0; i < this.OrderIndexArr.length; i++) {
          let element = this.OrderIndexArr[i];
          for (let j = 0; j < element.length; j++) {
            let item = element[j];
            if (rowIndex === item) {
              if (j === 0) {
                return {
                  rowspan: element.length,
                  colspan: 1
                };
              } else if (j !== 0) {
                return {
                  rowspan: 0,
                  colspan: 0
                };
              }
            }
          }
        }
      }
      if (columnIndex === 1) {
        for (let j = 0; j < this.provinceArr.length; j++) {
          let element = this.provinceArr[j];
          for (let k = 0; k < element.length; k++) {
            let item = element[k];
            if (rowIndex === item) {
              if (k === 0) {
                return {
                  rowspan: element.length,
                  colspan: 1
                };
              } else if (k !== 0) {
                return {
                  rowspan: 0,
                  colspan: 0
                };
              }
            }
          }
        }
      }
    }
  },
  created(){
      this.$nextTick(()=>{
          this.merge()
      })
  }
};
</script>
