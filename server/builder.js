function makeHtmlTable (data) {
  const tableHead = `
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Attending?</th>
        <th scope="col">Guests</th>
        <th scope="col">Song</th>
        <th scope="col">Created</th>
        <th scope="col">IP</th>
        <th scope="col">User_Agent</th>
      </tr>
    </thead>
  `
  let tableBody = ''
  data.forEach(entry => {
    tableBody += '<tr>'
    for (let key in entry) {
      if (key === 'attending') {
        if (entry[key] === 1) {
          tableBody += '<td>Yes</td>'
        } else if (entry[key] === 0) {
          tableBody += '<td>No</td>'
        }
        continue
      }

      tableBody += `<td>${entry[key]}</td>`
    }
    tableBody += `</tr>
    `
  })
  tableBody = `<tbody>${tableBody}</tbody`
  const table = `
    <table class="table table-striped">
      ${tableHead}
      ${tableBody}
    </table
  `

  const style = `<style>
    body {
      font-family: system, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", sans-serif;
    }
    table {
      border-collapse: collapse;
    }
    
    caption {
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      color: #6c757d;
      text-align: left;
      caption-side: bottom;
    }
    
    th {
      text-align: inherit;
    }
    .table {
      width: 100%;
      margin-bottom: 1rem;
      color: #212529;
    }
    
    .table th,
    .table td {
      padding: 0.75rem;
      vertical-align: top;
      border-top: 1px solid #dee2e6;
    }
    
    .table thead th {
      vertical-align: bottom;
      border-bottom: 2px solid #dee2e6;
    }
    
    .table tbody + tbody {
      border-top: 2px solid #dee2e6;
    }
    .table-striped tbody tr:nth-of-type(odd) {
      background-color: rgba(0, 0, 0, 0.05);
    }
  </style>`

  return `<html><body>${style}${table}</body</html>`
}

function makeCsv (data) {
  let csv = `ID,Name,Attending?,Guests,Song,Created,IP,User_Agent
  `
  data.forEach(entry => {
    for (let key in entry) {
      if (entry[key] === null) {
        entry[key] = ''
      }

      if (key === 'attending') {
        if (entry[key] === 1) {
          csv += 'Yes,'
        } else if (entry[key] === 0) {
          csv += 'No,'
        }
        continue
      }

      if (key === 'name' || key === 'song' || key === 'user_agent') {
        csv += `"${entry[key].replace('"', '""')}",` // escape qoutes in csv
      } else {
        csv += `${entry[key]},`
      }
    }
    csv = csv.slice(0, -1)
    csv += `
    `
  })

  return csv
}

module.exports = { makeHtmlTable, makeCsv }
