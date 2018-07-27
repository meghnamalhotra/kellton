var arr = [{
        name: 'rohit',
        last: 'gautam',
        empid: 6137,
        phoneno: 9211101612
    },
    {
        name: 'Meghna',
        last: 'malhotra',
        empid: 6131,
        phoneno: 7982812322
    },
    {
        name: 'suruchi',
        last: 'sihra',
        empid: 6135,
        phoneno: 9811762262
    },
    {
        name: 'chetna',
        last: 'kaur',
        empid: 6134,
        phoneno: 9811762262
    },
    {
        name: 'pawan',
        last: 'malhotra',
        empid: 6139,
        phoneno: 9811762262
    },
    {
        name: 'aditya',
        last: 'setia',
        empid: 6132,
        phoneno: 9811762262
    },
    {
        name: 'abhi',
        last: 'yadav',
        empid: 6133,
        phoneno: 9811762262
    },
    {
        name: 'arav',
        last: 'sethi',
        empid: 6128,
        phoneno: 9811762262
    },
    {
        name: 'rishu',
        last: 'sachdeva',
        empid: 6120,
        phoneno: 9811762262
    },
    {
        name: 'jass',
        last: 'singh',
        empid: 6111,
        phoneno: 9811762262
    }

];
var l = arr.length;
sort1();
printTable();

function printTable() {
    var Row =
        "<tr><th><button onclick='reverse()'>FIRST NAME</button></th><th>LAST NAME</th><th>EMPID</th><th>MOBILE NO.</th>";
    for (i = 0; i < l; i++) {

        Row = Row + "<tr><td>" + arr[i].name + "</td><td>" +
            arr[i].last + "</td><td>" + arr[i].empid + "</td><td>" + arr[i].phoneno + "</tr>";
    }
    document.getElementById("table").innerHTML = Row;
}

function reverse() {
    arr.reverse();
    printTable();
}

function reverse1() {
    arr.reverse();
    printTable();
}

function sort1() {
    arr.sort(function (a, b) {
        var nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase()
        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0
    });

}

function search() {

    var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }


        if (found) {


            tr[i].style.display = "";

            found = false;
        } else {
            tr[i].style.display = "none";

        }

    }
}