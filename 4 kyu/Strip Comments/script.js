function solution(input, markers) {
    input = input.split("\n");
    let newarr = [];
    for (let i = 0; i < input.length; i++) {
        let inputarr = input[i].split("");
        for(let j = 0 ; j < inputarr.length; j++){
            if(inputarr[j] == markers[0] || inputarr[j] == markers[1]){
                inputarr.splice(j, inputarr.length - 1);
            } 
        }
        inputarr = inputarr.join("").trim();
        newarr.push(inputarr + "\n");
    }
    let result = newarr.join("");
    return result.slice(0, -1);
};


var result = solution("Q @b\nu\ne -e f g", ["@", "-"]);
console.log(result);