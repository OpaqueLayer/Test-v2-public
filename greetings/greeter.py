"""Greeting utilities."""


def greet(name: str = "World") -> str:
    """Return a personalized greeting message.

    Args:
        name: Name of the person to greet. Defaults to "World".

    Returns:
        A greeting string.
    """
    return f"Hello, {name}!"
