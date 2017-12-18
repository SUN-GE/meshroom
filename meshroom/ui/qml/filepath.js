/* Utility functions to manipulate file paths */

/// Returns the directory name of the given path.
function dirname(path) {
    return path.substring(0, path.lastIndexOf('/'))
}

/// Returns the basename (file.extension) of the given path.
function basename(path) {
    return path.substring(path.lastIndexOf('/') + 1, path.length)
}

/// Return the extension (prefixed by a '.') of the given path.
function extension(path) {
    var dot_pos = path.lastIndexOf('.');
    return dot_pos > -1 ? path.substring(dot_pos, path.length) : ""
}