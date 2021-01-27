import { useState } from 'react';

function App() {
  let [angka, setAngka] = useState({})
  let [checkbox, setCheckbox] = useState({
    pertama: false,
    kedua: false,
    ketiga: false
  })
  let [tujuan, setTujuan] = useState(0)
  function ganti (e) {
    angka[e.target.id] = e.target.value
    setAngka(angka)
  }
  function check (e) {
    checkbox[e.target.id] = e.target.checked
    setCheckbox(checkbox)
  }
  function hasilnya (e) {
    e.preventDefault()
    let jumlahChecked = 0
    let arrayAngkaChecked = []

    for (const key in checkbox) {
      if (checkbox[key]) {
        jumlahChecked++
        angka[key] = angka[key] || 0
        arrayAngkaChecked.push(+angka[key])
      }
    }

    if (jumlahChecked < 2) setTujuan(false)
    else {
      let temp = arrayAngkaChecked[0]
      if (e.target.id === 'kali') {
        arrayAngkaChecked.forEach((el, index) => index > 0 ? temp = temp * el : false)
      }
      else if (e.target.id === 'bagi') {
        arrayAngkaChecked.forEach((el, index) => index > 0 ? temp = temp / el : false)
      }
      else if (e.target.id === 'tambah') {
        arrayAngkaChecked.forEach((el, index) => index > 0 ? temp = temp + el : false)
      }
      else if (e.target.id === 'kurang') {
        arrayAngkaChecked.forEach((el, index) => index > 0 ? temp = temp - el : false)
      }
      setTujuan(temp)
    }
  }

  return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div className='card bg-info'>
          <div className='d-flex flex-column align-items-center'>
            <div className="m-3">
              <input type="number" id="pertama" onChange={(e) => ganti(e)} />
              <input type="checkbox" className="m-2" id="pertama" onChange={(e) => check(e)} />
            </div>
            <div className="m-3">
              <input type="number" id="kedua" onChange={(e) => ganti(e)} />
              <input type="checkbox" className="m-2" id="kedua" onChange={(e) => check(e)} />
            </div>
            <div className="m-3">
              <input type="number" id="ketiga" onChange={(e) => ganti(e)} />
              <input type="checkbox" className="m-2" id="ketiga" onChange={(e) => check(e)} />
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <button type="submit" className="btn btn-secondary m-1" id='kali' onClick={e=> hasilnya(e)}>X</button>
            <button type="submit" className="btn btn-secondary m-1" id='bagi' onClick={e=> hasilnya(e)}>:</button>
            <button type="submit" className="btn btn-secondary m-1" id='tambah' onClick={e=> hasilnya(e)}>+</button>
            <button type="submit" className="btn btn-secondary m-1" id='kurang' onClick={e=> hasilnya(e)}>-</button>
          </div>
          <div className='mt-2 d-flex justify-content-center wh-100'>
            {tujuan !== false && (<p className='fw-bold text-light fs-3 wh-100'>
              Result : {tujuan}
            </p>)}
            {tujuan === false && (<div className="wh-100 alert alert-danger text-wrap fw-bold">Error! minimum checked box is 2</div>)}
          </div>
        </div>
      </div>

  );
}

export default App;
