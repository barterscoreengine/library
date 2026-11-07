#!/bin/sh
# ==============================================================================
# BarterScore Engine - Offline POSIX / Unix Launcher
# License: Apache-2.0
# Compatible with: Linux, macOS (Darwin), FreeBSD, OpenBSD, NetBSD, Solaris
# ==============================================================================

set -e

# Resolve absolute directory path of this script using standard POSIX constructs
SCRIPT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
TARGET_FILE="${SCRIPT_DIR}/manual_generator.html"

printf "============================================================================\n"
printf " BarterScore Engine - Offline Manual Generator Launcher\n"
printf "============================================================================\n\n"

if [ ! -f "$TARGET_FILE" ]; then
    printf "[ERROR] Target file not found: %s\n" "$TARGET_FILE" >&2
    printf "Please ensure 'manual_generator.html' is present in the project root.\n" >&2
    exit 1
fi

printf "[INFO] Launching offline interface via local file:// protocol...\n"
printf "[PATH] %s\n\n" "$TARGET_FILE"

OS_NAME="$(uname -s 2>/dev/null || echo Unknown)"

case "$OS_NAME" in
    Darwin*)
        open "$TARGET_FILE"
        ;;
    Linux*|FreeBSD*|OpenBSD*|NetBSD*|DragonFly*|SunOS*)
        if command -v xdg-open >/dev/null 2>&1; then
            xdg-open "$TARGET_FILE" >/dev/null 2>&1 &
        elif command -v gio >/dev/null 2>&1; then
            gio open "$TARGET_FILE" >/dev/null 2>&1 &
        elif command -v sensible-browser >/dev/null 2>&1; then
            sensible-browser "$TARGET_FILE" >/dev/null 2>&1 &
        elif command -v x-www-browser >/dev/null 2>&1; then
            x-www-browser "$TARGET_FILE" >/dev/null 2>&1 &
        elif command -v firefox >/dev/null 2>&1; then
            firefox "$TARGET_FILE" >/dev/null 2>&1 &
        elif command -v chromium >/dev/null 2>&1; then
            chromium "$TARGET_FILE" >/dev/null 2>&1 &
        elif command -v chromium-browser >/dev/null 2>&1; then
            chromium-browser "$TARGET_FILE" >/dev/null 2>&1 &
        elif command -v google-chrome >/dev/null 2>&1; then
            google-chrome "$TARGET_FILE" >/dev/null 2>&1 &
        else
            printf "[ERROR] No graphical web browser or desktop opener detected.\n" >&2
            printf "Open the following URL manually in your browser:\n" >&2
            printf "file://%s\n" "$TARGET_FILE" >&2
            exit 1
        fi
        ;;
    CYGWIN*|MINGW*|MSYS*)
        cmd.exe /c start "" "$(cygpath -w "$TARGET_FILE" 2>/dev/null || echo "$TARGET_FILE")"
        ;;
    *)
        if command -v xdg-open >/dev/null 2>&1; then
            xdg-open "$TARGET_FILE" >/dev/null 2>&1 &
        elif command -v open >/dev/null 2>&1; then
            open "$TARGET_FILE"
        else
            printf "[INFO] Open this path manually in your browser: file://%s\n" "$TARGET_FILE"
            exit 1
        fi
        ;;
esac

printf "[OK] BarterScore Engine launched.\n"
exit 0
