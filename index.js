const saveEl = document.getElementById("save-el")
const countEl = document.getElementById("count-el")
const statusEl = document.getElementById("status-el")

let count = 0
let entries = []

function renderCount() {
    countEl.textContent = count
    countEl.classList.remove("bump")
    // Reflow to reliably restart the bump animation on every update.
    void countEl.offsetWidth
    countEl.classList.add("bump")
}

function increment() {
    count += 1
    renderCount()
    statusEl.textContent = "Counting passengers..."
}

function decrement() {
    if (count > 0) {
        count -= 1
        renderCount()
        statusEl.textContent = "Adjusted count"
    } else {
        statusEl.textContent = "Count is already zero"
    }
}

function save() {
    if (count === 0) {
        statusEl.textContent = "Add passengers before saving"
        return
    }

    entries.push(count)
    saveEl.textContent = entries.join("  •  ")
    statusEl.textContent = `Saved ${count} passenger${count === 1 ? "" : "s"}`

    count = 0
    renderCount()
}

function resetAll() {
    count = 0
    entries = []
    saveEl.textContent = "No entries yet."
    statusEl.textContent = "Counter reset"
    renderCount()
}
