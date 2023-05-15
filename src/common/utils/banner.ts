import gradient from "gradient-string";

export function printBootBanner() {
  const coolGradient = gradient("red", "blue", "green", "orange");

  const coolString = coolGradient(String.raw`

  /$$$$$$$$ /$$        /$$$$$$  /$$      /$$  /$$$$$$   /$$$$$$ 
 |__  $$__/| $$       /$$__  $$| $$  /$ | $$ /$$__  $$ /$$__  $$
    | $$   | $$      | $$  \ $$| $$ /$$$| $$| $$  \ $$| $$  \__/
    | $$   | $$      | $$  | $$| $$/$$ $$ $$| $$$$$$$$| $$      
    | $$   | $$      | $$  | $$| $$$$_  $$$$| $$__  $$| $$      
    | $$   | $$      | $$  | $$| $$$/ \  $$$| $$  | $$| $$    $$
    | $$   | $$$$$$$$|  $$$$$$/| $$/   \  $$| $$  | $$|  $$$$$$/
    |__/   |________/ \______/ |__/     \__/|__/  |__/ \______/     
                                  To Light On! We Are Comming :)
                                            Made By ChangHun Lee
      `);

  return coolString;
}