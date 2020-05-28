/// <reference no-default-lib="true"/>

/**

 * Easier to use icon library.
 */
//% color=#007EF4 weight=96 icon="\uf294"
namespace icons {
    enum iconList {
        Cat,
        Dog,
        Turtle,
        Fox
    };
    /**
    * Use existing icon
    *
    */
    //%  @param icon_name, e.g. owl
    //% blockId=use_existing_icon block="use existing icon %e" blockGap=8
    export function useExistingIcon(e: iconList): void {
        const thing = e;
        console.log(e.toString())
    }

}
