//numeral to pretyPrint
import numeral from 'numeral';
export const prettyPrint = (stat: any) => {
    return stat ? `+${numeral(stat).format("0.0a")}`: `+${numeral(0).format("0.0a")}`;
}