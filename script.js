function getChart1() {
  $.ajax({
    url: "fulldb1.php",
    method: "GET",
    data: {level: getLevel()},
    success: function(data) {

      var allData = JSON.parse(data);

      if (allData == 'no permission') {
        $("#myChart1").parent().remove();
      }
      else {

        var myType = allData['type'];
        var myData = allData['data'];

        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
          type: myType,
          data: {
            labels: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
            datasets: [{
              label: "vendite",
              data: myData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1
            }]
          },
        });
      }
    },
    error: function() {}
  });
}

function getChart2() {
  $.ajax({
    url: "fulldb2.php",
    method: "GET",
    data: {level: getLevel()},
    success: function(data) {

      var allData = JSON.parse(data);

      if (allData == 'no permission') {
        $("#myChart2").parent().remove();
      }
      else {

        var myType = allData['type'];
        var myData = allData['data'];
        var myLabels = allData['labels'];


        var ctx = document.getElementById('myChart2').getContext('2d');
        var myChart = new Chart(ctx, {
          type: myType,
          data: {
            labels: myLabels,
            datasets: [{
              label: "vendite",
              data: myData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(33, 189, 13, 0.2)',
                'rgba(155, 199, 12, 0.2)',
                'rgba(155, 39, 192, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(33, 189, 13, 1)',
                'rgba(155, 199, 12, 1)',
                'rgba(155, 39, 192, 1)',
              ],
              borderWidth: 1
            }]
          },
        });
      }

    },
    error: function() {}
  });
}

function getChart3() {
  $.ajax({
    url: "fulldb3.php",
    method: "GET",
    data: {level: getLevel()},
    success: function(data) {

      var allData = JSON.parse(data);

      if (allData == 'no permission') {
        $("#myChart3").parent().remove();
      }
      else {

        var myType = allData['type'];
        var myData = allData['data'];
        var myLabels = allData['labels'];


        var ctx = document.getElementById('myChart3').getContext('2d');
        var myChart = new Chart(ctx, {
          type: myType,
          data: {
            labels: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
            datasets: [{
              label: myLabels[0],
              data: myData[0],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1
            },
            {
              label: myLabels[1],
              data: myData[1],
              backgroundColor: [
                'rgba(33, 189, 13, 0.2)',
              ],
              borderColor: [
                'rgba(33, 189, 13, 1)',
              ],
              borderWidth: 1
            },
            {
              label: myLabels[2],
              data: myData[2],
              backgroundColor: [
                'rgba(155, 199, 12, 0.2)',
              ],
              borderColor: [
                'rgba(155, 199, 12, 1)',
              ],
              borderWidth: 1
            },
          ]
        },
      });
      }

    },
    error: function() {}
  });
}

function getLevel() {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('level');
}

function init() {
  getChart1();
  getChart2();
  getChart3();
}

$(init)
