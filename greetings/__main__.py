"""Command-line interface for greetings."""

from .greeter import greet
import argparse


def main() -> None:
    parser = argparse.ArgumentParser(description="Greet someone")
    parser.add_argument("name", nargs="?", default="World", help="Name to greet")
    args = parser.parse_args()
    print(greet(args.name))


if __name__ == "__main__":
    main()
