interface Cc{
  [key: string]: number;
}
export function decodedResistorValue(s:Array<string>) {
  const colorCodes: Cc= {
    "black": 0, "brown": 1, "red": 2, "orange": 3, "yellow": 4, 
    "green": 5, "blue": 6, "violet": 7,"grey": 8, "white": 9,
  };
  const units = [
    { factor: 1000000000, label: 'gigaohms' },
    { factor: 1000000, label: 'megaohms' },
    { factor: 1000, label: 'kiloohms' },
    { factor: 1, label: 'ohms' }
  ];
  let result:string = "";
  let c1:number = colorCodes[s[0]];
  let c2:number = colorCodes[s[1]];
  let multiplier:number = colorCodes[s[2]];
  let total_ohms:number = (c1*10 + c2) * (10 ** multiplier);

  for (let unit of units){
    if (total_ohms >= unit.factor){
      return `${total_ohms / unit.factor} ${unit.label}`;
    }
  };
  
  return "0 ohms";
}
