use tauri::Manager;

mod cmd;


#[derive(Clone, serde::Serialize)]
struct Payload {
  msg: String,
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
      cmd::get_battery_temperature,
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
