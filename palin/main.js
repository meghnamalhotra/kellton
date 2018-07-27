function main() {
    var arr = [];

    var str = document.getElementById("inputfield").value;
    var n = str.length;
    var str1 = str.split('');
    for (var i = 0; i <= n; i++) {
        for (var j = i + 1; j <= n; j++) {
            var s = str.substring(i, j);
            fun(s);
        }
    }


    function palin(x) {
        if (x == 1) return false;
        for (var i = 2; i < x; i++)
            if (x % i === 0) return false;
        return true;
    }

    function fun(str) {
        if (str == str.split('').reverse().join('')) {
            var x = str.length;

            if (x != 1) {
                var res1 = str;
                var res;
                var b = palin(x);
                if (b == true)
                    res = "PRIME";
                else
                    res = "COMPO";
                arr.push({
                    "name": res1,
                    "prime": res,
                    "length": x
                });
            }
        }



    }
    var text = "<ol>";
    arr.forEach(element => {
        text = text + "<li>" + element.name + "->" + element.prime + "->" + element.length + "</li>"

    });
    text = text + "</ol>";
    document.getElementById('list').innerHTML = text;
}