import { useState } from 'react';

function App() {
  let [angka, setAngka] = useState({})
  let [checkbox, setCheckbox] = useState({})
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

    if (jumlahChecked < 2) setTujuan('error')
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
      <div className="d-flex flex-column justify-content-center align-items-center bg-info vh-100" style={{ color: "blue" }}>
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
        <div>
          <button type="submit" className="btn btn-secondary m-1" id='kali' onClick={e=> hasilnya(e)}>X</button>
          <button type="submit" className="btn btn-secondary m-1" id='bagi' onClick={e=> hasilnya(e)}>:</button>
          <button type="submit" className="btn btn-secondary m-1" id='tambah' onClick={e=> hasilnya(e)}>+</button>
          <button type="submit" className="btn btn-secondary m-1" id='kurang' onClick={e=> hasilnya(e)}>-</button>
        </div>
        <div>
          <p className='fw-bold text-dark'>
            Hasil : {tujuan}
          </p>
        </div>
      </div>

  );
}

export default App;
