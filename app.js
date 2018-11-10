var dataObject = [{
    "id_penyewaan": "1",
    "id_anak": "Apriyanto",
    "jumlah_uang": "Rp 4.000.000",
    "tanggal_masuk": "2018-11-01",
    "tanggal_keluar": "2019-11-01",
    "id_kamar": "1",
    "harga_kamar": "Rp 7.000.000"
  },
  {
    "id_penyewaan": "2",
    "id_anak": "Jeremia",
    "jumlah_uang": "Rp 3.000.000",
    "tanggal_masuk": "2018-11-30",
    "tanggal_keluar": "2019-11-30",
    "id_kamar": "2",
    "harga_kamar": "Rp 8.000.000"
  },
  {
    "id_penyewaan": "3",
    "id_anak": "Tobing",
    "jumlah_uang": "Rp 600.000",
    "tanggal_masuk": "2018-12-15",
    "tanggal_keluar": "2019-06-15",
    "id_kamar": "3",
    "harga_kamar": "Rp 4.000.000"
  }
];

var Application = {
  initApplication: function() {
    $(window).load('pageinit', '#page-one', function() {
      Application.initShowMhs();
    })
    $(document).on('click', '#detail-penyewaan', function() {
      var penyewaan = $(this).data('penyewaan');
      Application.initShowDetailMhs(penyewaan);
    })
  },

  initShowMhs: function() {
    for (var i = 0; i < dataObject.length; i++) {
      var appendList = '<li class="listitem"><a href="#page-two?id=' + dataObject[i].id_penyewaan +
        '" target="_self" id="detail-penyewaan" data-penyewaan="' + dataObject[i].id_penyewaan + '"><h2>' + dataObject[i].id_anak + '</h2><h2>' + dataObject[i].jumlah_uang + '</h2><p>' + dataObject[i].tanggal_masuk + '</p><p><b>' + dataObject[i].id_kamar + '</b></p></a></li>'
      $('#list-mhs').append(appendList);
      // buatan apri
      $('#list-mhs').listview('refresh');
    }
  },

  initShowDetailMhs: function(penyewaan) {
    var appendDetail = "";
    $('#table-detailMhs thead').remove();
    $('#table-detailMhs tbody').remove();
    var head = '<thead><tr><th data-priority="1">Nama Anak</th>';
    head += '<th data-priority="2">Jumlah Uang</th>';
    head += '<th data-priority="3">Tanggal Masuk</th>';
    head += '<th data-priority="4">Tanggal Keluar</th>';
    head += '<th data-priority="5">Nomor Kamar</th>';
    head += '<th data-priority="6">Harga Kamar</th></tr></thead>';
    $('#table-detailMhs').append(head);

    // untuk saat ini kaya gini dulu
    for (var i = 0; i < dataObject.length; i++) {
      if (dataObject[i].id_penyewaan == penyewaan) {
        appendDetail +=
          '<tbody><tr><td><b class="ui-table-cell-label">Nama Anak</b>' + dataObject[i].id_anak + '</td><td><b class="ui-table-cell-label">Jumlah Uang</b>' + dataObject[i].jumlah_uang +
          '</td><td><b class="ui-table-cell-label">Tanggal Masuk</b>' + dataObject[i].tanggal_masuk +
          '</td><td><b class="ui-table-cell-label">Tanggal Keluar</b>' + dataObject[i].tanggal_keluar + '</td><td><b class="ui-table-cell-label">Nomor Kamar</b>' + dataObject[i].id_kamar +
          '</td><td><b class="ui-table-cell-label">Harga Kamar</b>' + dataObject[i].harga_kamar + '</td></tr></tbody>';
        $('#table-detailMhs').append(appendDetail);
      }
    }
  },
};
