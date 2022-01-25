use serde::Deserialize;
use std::process::{Command};
use tauri::command;

#[command]
pub fn get_battery_temperature(event: String) -> Option<String> {
    Some("recebi".to_string())
}