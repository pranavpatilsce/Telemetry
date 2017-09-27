/*
 *    kammce.io - Copyright (C) 2017
 *
 *    This file is part of free software application meant for embedded processors
 *    development and testing. You can use it and/or distribute it as long as this
 *    copyright header remains unmodified.  The code is free for personal, educational,
 *    academic research, and commercial environment use but requires permission
 *    to be used in a commercial product.
 *
 *    THIS SOFTWARE IS PROVIDED "AS IS".  NO WARRANTIES, WHETHER EXPRESS, IMPLIED
 *    OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF
 *    MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE APPLY TO THIS SOFTWARE.
 *    I SHALL NOT, IN ANY CIRCUMSTANCES, BE LIABLE FOR SPECIAL, INCIDENTAL, OR
 *    CONSEQUENTIAL DAMAGES, FOR ANY REASON WHATSOEVER. THIS SOFTWARE MAY NOT BE
 *    SUBLICENSED WITHOUT PERMISSION.
 *
 *    You can reach the author of this software at:
 *         k a m m c e c o r p @ g m a i l . c o m
 */

Highcharts.setOptions(
{
    plotOptions:
    {
        area:
        {
            animation: false,
            enableMouseTracking: false,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
        arearange:
        {
            animation: false,
            enableMouseTracking: false,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
        areaspline:
        {
            animation: false,
            enableMouseTracking: false,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
        // areasplinerange:
        //     { animation: false, enableMouseTracking: false, stickyTracking: true, shadow: false, dataLabels:
        //     { style:
        //     { textShadow: false } } },
        // bar:
        // { animation: false, enableMouseTracking: false, stickyTracking: true, shadow: false, dataLabels:
        //     { style:
        //     { textShadow: false } } },
        boxplot:
        {
            animation: false,
            enableMouseTracking: false,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
        bubble:
        {
            animation: false,
            enableMouseTracking: false,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
        column:
        {
            animation: false,
            enableMouseTracking: false,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
        columnrange:
        {
            animation: false,
            enableMouseTracking: false,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
        errorbar:
        {
            animation: false,
            enableMouseTracking: false,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
        funnel:
        {
            animation: false,
            enableMouseTracking: false,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
        gauge:
        {
            animation: false,
            enableMouseTracking: false,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
        heatmap:
        {
            animation: false,
            enableMouseTracking: false,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
        line:
        {
            animation: false,
            enableMouseTracking: false,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
        pie:
        {
            animation: false,
            enableMouseTracking: false,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
        polygon:
        {
            animation: false,
            enableMouseTracking: false,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
        pyramid:
        {
            animation: false,
            enableMouseTracking: false,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
        scatter:
        {
            animation: false,
            enableMouseTracking: false,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
        series:
        {
            animation: false,
            enableMouseTracking: true,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
        solidgauge:
        {
            animation: false,
            enableMouseTracking: false,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
        spline:
        {
            animation: false,
            enableMouseTracking: false,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
        treemap:
        {
            animation: false,
            enableMouseTracking: false,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
        waterfall:
        {
            animation: false,
            enableMouseTracking: false,
            stickyTracking: true,
            shadow: false,
            dataLabels:
            {
                style:
                {
                    textShadow: false
                }
            }
        },
    },
    chart:
    {
        reflow: false,
        events:
        {
            redraw: function()
            {
                // console.log("highcharts redraw, rendering-done");
                // $('body').addClass('rendering-done');
            }
        },
        animation: false
    },
    tooltip:
    {
        enabled: true,
        animation: false
    },
    exporting:
    {
        enabled: false
    },
    credits:
    {
        enabled: false
    }
});