/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { animate, state, style, transition, trigger } from '@angular/animations';
/** @type {?} */
export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [style({ opacity: 0 }), animate('0.4s ease-in', style({ opacity: 1 }))]),
    transition(':leave', [animate('0.4s 10ms ease-out', style({ opacity: 0 }))])
]);
/**
 * @param {?=} duration
 * @return {?}
 */
export function flyInOut(duration = 0.2) {
    return trigger('flyInOut', [
        state('in', style({ opacity: 1, transform: 'translateX(0)' })),
        transition('void => *', [style({ opacity: 0, transform: 'translateX(-100%)' }), animate(`${duration}s ease-in`)]),
        transition('* => void', [animate(`${duration}s 10ms ease-out`, style({ opacity: 0, transform: 'translateX(100%)' }))])
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYW5pbWF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUlqRixNQUFNLE9BQU8sU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUU7SUFDMUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdGLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQy9FLENBQUM7Ozs7O0FBSUYsTUFBTSxVQUFVLFFBQVEsQ0FBQyxXQUFtQixHQUFHO0lBQzNDLE9BQU8sT0FBTyxDQUFDLFVBQVUsRUFBRTtRQUN2QixLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDOUQsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDakgsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLFFBQVEsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6SCxDQUFDLENBQUM7QUFDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuXG5cbmV4cG9ydCBjb25zdCBmYWRlSW5PdXQgPSB0cmlnZ2VyKCdmYWRlSW5PdXQnLCBbXG4gICAgdHJhbnNpdGlvbignOmVudGVyJywgW3N0eWxlKHsgb3BhY2l0eTogMCB9KSwgYW5pbWF0ZSgnMC40cyBlYXNlLWluJywgc3R5bGUoeyBvcGFjaXR5OiAxIH0pKV0pLFxuICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFthbmltYXRlKCcwLjRzIDEwbXMgZWFzZS1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpXSlcbl0pO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGZseUluT3V0KGR1cmF0aW9uOiBudW1iZXIgPSAwLjIpIHtcbiAgICByZXR1cm4gdHJpZ2dlcignZmx5SW5PdXQnLCBbXG4gICAgICAgIHN0YXRlKCdpbicsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSkpLFxuICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScgfSksIGFuaW1hdGUoYCR7ZHVyYXRpb259cyBlYXNlLWluYCldKSxcbiAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW2FuaW1hdGUoYCR7ZHVyYXRpb259cyAxMG1zIGVhc2Utb3V0YCwgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyB9KSldKVxuICAgIF0pO1xufVxuIl19