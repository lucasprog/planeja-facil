<script setup lang="ts">

    import { computed, ref } from 'vue';

    const date = ref({
        dateBefore: new Date(),
        dateCurrent: new Date(),
        dateAfter: new Date(),
    });
    
    const viewYear = computed(() => {
        const { dateCurrent} = date.value;

        return [
            { year : dateCurrent.getFullYear() - 1, active: false},
            { year : dateCurrent.getFullYear(), active: true},
            { year : dateCurrent.getFullYear() + 1, active: false}
        ];
    });
    

    date.value.dateBefore.setDate((new Date()).getDate() - 1);
    date.value.dateAfter.setDate((new Date()).getDate() + 1);

    const viewDate = computed(() => {
        return [
            { 
                date: date.value.dateBefore.getDate(), 
                month: date.value.dateBefore.toLocaleString('default', { month: 'short' }),
                active: false
            },
            { 
                date: date.value.dateCurrent.getDate(),
                month: date.value.dateCurrent.toLocaleString('default', { month: 'short' }),
                active: true
            },
            { 
                date: date.value.dateAfter.getDate(),
                month: date.value.dateAfter.toLocaleString('default', { month: 'short' }),
                active: false
            }
        ]
    });

    const prevYear = () => {
        const { dateBefore, dateAfter, dateCurrent } = date.value;
        
        dateCurrent.setFullYear(dateCurrent.getFullYear() - 1);

        date.value = {
            dateBefore,
            dateCurrent,
            dateAfter,
        };
    };

    const nextYear = () => {
        const { dateBefore, dateAfter, dateCurrent } = date.value;
        
        dateCurrent.setFullYear(dateCurrent.getFullYear() + 1);

        date.value = {
            dateBefore,
            dateCurrent,
            dateAfter,
        };

    };

    const prevDate = () => { 
        const { dateBefore, dateAfter, dateCurrent } = date.value;

        dateBefore.setDate(dateBefore.getDate() - 1);
        dateCurrent.setDate(dateCurrent.getDate() - 1);
        dateAfter.setDate(dateAfter.getDate() - 1);

        date.value = {
            dateBefore,
            dateCurrent,
            dateAfter,
        }
    }

    const nextDate = () => { 
        const { dateBefore, dateAfter, dateCurrent } = date.value;

        dateBefore.setDate(dateBefore.getDate() + 1);
        dateCurrent.setDate(dateCurrent.getDate() + 1);
        dateAfter.setDate(dateAfter.getDate() + 1);

        date.value = {
            dateBefore,
            dateCurrent,
            dateAfter,
        }
    }

    const intervalMousePress = ref<any>(null);

    const onMouseDown = (callback: any) => {
        callback();
        intervalMousePress.value = setInterval(callback,200);
    }

    const onMouseUp = () => {
        clearInterval(intervalMousePress.value);
    }

</script>
<template>
    <div class="c-plf-filter-calendar">

        <div class="c-plf-filter-calendar__container-year">
            <ul class="c-plf-filter-calendar__inner-year">
                <button 
                    @mousedown="onMouseDown(prevYear)" 
                    @mouseup="onMouseUp()"
                    class="c-plf-filter-calendar__arrow-left icon-caret-left"></button>
                <li v-for="(item,index) in viewYear" :key="index" 
                    class="c-plf-filter-calendar__item-year"
                    :class="{'c-plf-filter-calendar__item-year--active':item.active}">
                    <span class="c-plf-filter-calendar__year">{{ item.year}}</span>
                </li>
                <button 
                    @mousedown="onMouseDown(nextYear)" 
                    @mouseup="onMouseUp()"
                    class="c-plf-filter-calendar__arrow-right icon-caret-right"></button>
            </ul>
        </div>

        <div class="c-plf-filter-calendar__container-year">
            <ul class="c-plf-filter-calendar__inner-date">
                <button 
                    @mousedown="onMouseDown(prevDate)" 
                    @mouseup="onMouseUp()"
                    class="c-plf-filter-calendar__arrow-left icon-caret-left"></button>
                <li v-for="(item,index) in viewDate"  :key="index" 
                    class="c-plf-filter-calendar__item-date"
                    :class="{'c-plf-filter-calendar__item-date--active':item.active}">
                    <span class="c-plf-filter-calendar__item-date-month">{{ item.month }}</span>
                    <span class="c-plf-filter-calendar__item-date-day">{{ item.date }}</span>
                </li>
                <button 
                    @mousedown="onMouseDown(nextDate)" 
                    @mouseup="onMouseUp()"
                    class="c-plf-filter-calendar__arrow-right icon-caret-right"></button>
            </ul>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .c-plf-filter-calendar{
        @apply flex flex-col ;

        &__container-year,
        &__container-date{
            @apply flex gap-4 items-center w-full justify-center;
        }

        &__inner-year,
        &__inner-date{
            @apply flex gap-4 items-center p-2;
        }

        &__item{

            &-year{
                @apply justify-center text-plf-blue-light text-xl font-semibold flex items-center;
                &--active{
                    @apply text-plf-blue-dark text-3xl font-black;
                }
            }

             &-date{
                @apply flex flex-col items-center justify-center gap-0 bg-plf-blue-light font-semibold rounded-3xl p-1 w-16 h-16;

                &--active{
                    @apply bg-plf-blue-dark font-black;
                }
                
                &-month,
                &-day{
                    @apply text-white opacity-80 inline-flex;
                }

                &-month{
                    @apply text-[1.0rem] relative top-2;
                }

                &-day{
                    @apply text-[2.25rem] relative top-[-0.25rem];
                }

                &--active &-month,
                &--active &-day{
                    @apply text-white opacity-100;
                }
            }
        }
        &__arrow-right,
        &__arrow-left{
            @apply w-4 h-4;
        }
    }
</style>