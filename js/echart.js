// 获取到这个DOM节点，然后初始化

var myChart = echarts.init(document.getElementById("box"));
var option = {
    // 标题
    // title: {
    //     text: '红包活动数据',
    //     subtext: '数据来源：华秉科技-dancer'
    // },
    tooltip: {
        trigger: 'axis'
    },
    //图例名
    // legend: {
    //     data:['收益']
    // },
    grid: {
        left: '3%', //图表距边框的距离
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    //工具框，可以选择
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    //x轴信息样式
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        //坐标轴颜色
        axisLine: {
            lineStyle: {
                color: '#cdcdcd'
            }
        }
        // ,
        //x轴文字旋转
        // axisLabel:{
        //     rotate:30,
        //     interval:0
        // },
    },

    yAxis: [{
        min: 0, //最小刻度
        max: 100, //最大刻度
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#cdcdcd'
            }
        },
        axisLabel: {
            formatter: '{value} %'
        }
    }],
    series: [
        //虚线
        {
            name: '收益',
            type: 'line',
            // symbol:'none',//拐点样式
            symbolSize: 4, //拐点圆的大小
            data: [10, 5, 80, 50, 62, 70, 100, 50, 80, 32, 48, 59],
            smooth: false, //关键点，为true是不支持虚线的，实线就用true
            itemStyle: {
                normal: {
                    color: '#448aca', //设置拐点颜色
                    lineStyle: {
                        width: 2,
                        color: '#448aca',
                        type: 'solid' //'dotted'虚线 'solid'实线
                    }
                }
            }
        }
    ]
};

myChart.setOption(option);