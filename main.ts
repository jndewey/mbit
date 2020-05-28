/// <reference no-default-lib="true"/>
bluetooth.startIOPinService()

/**

led.plot(0, 0)
 * Easier to use icon library.
 */
//% color=#007EF4 weight=96 icon="\uf294"
namespace icons {

    /**
    * Use existing icon
    *
    */
    //%  @param icon_name, e.g. owl
    //% blockId=use_existing_icon block="use existing icon %icon_name" blockGap=8
    export function useExistingIcon(icon_name: string): void {
        console.log(icon_name)
    }

}
