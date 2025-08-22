import unittest

from greetings.greeter import greet


class GreetTests(unittest.TestCase):
    def test_default_greeting(self) -> None:
        self.assertEqual(greet(), "Hello, World!")

    def test_custom_name(self) -> None:
        self.assertEqual(greet("Alice"), "Hello, Alice!")


if __name__ == "__main__":
    unittest.main()
