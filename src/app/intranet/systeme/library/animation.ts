import {
    animation, trigger, animateChild, group,
    transition, animate, style, query
} from '@angular/animations';

export const toggleLeft = animation([
    style({
        left: '{{ left }}'
    }),
    animate('{{ time }}')
]);